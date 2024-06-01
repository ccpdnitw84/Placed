const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const User = require("./models/User");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected.");
        app.listen(PORT, () =>
            console.log(`Server is running on port ${PORT}`)
        );
    })
    .catch(err => console.error(err));

app.get('/', (req, res) => res.send("API Running"));

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.post('/register', async (req, res) => {
    const {username, email, mobile, password, role} = req.body;
    const newUser = new User({username, email, mobile, password, role});

    newUser.save()
        .then(() => {
            console.log("User registered successfully")
            return res.status(200).json({ user: newUser });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("Error registering user");
        });
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    User.findOne({email})
        .then(user => {
            if(user && user.isValidPassword(password)) {
                console.log("Login Successful");
                const token = generateToken(user);
                res.cookie('token', token, {httpOnly: true})
                return res.status(200).json({ user });   
            }
            else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error logging in");
        });
});

app.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({ user: req.user });
});

app.get('/current-user', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        User.findById(decoded.id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                return res.status(200).json({ user });
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send("Error fetching user");
            });
    });
});