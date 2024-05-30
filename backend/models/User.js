const mongoose = require("mongoose");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile: {type: String, required: true, unique: true, match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']},
    password: {type: String, required: true},
    role: {type: String, enum:['head_tnp', 'tnp_coordinator', 'student', 'hr'], required: true}
});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await argon2.hash(this.password);
        next();
    } catch (err){
        next(err);
    }
});

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await argon2.verify(this.password, password);
    } catch (err) {
        return false;
    }
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;