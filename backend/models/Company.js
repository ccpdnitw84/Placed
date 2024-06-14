const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    cgpa: {type: Number, reuired:true},
    branch: {type: [String], required:true}
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;