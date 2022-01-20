const mongoose = require("mongoose");

module.exports = mongoose.model("jobs", new mongoose.Schema({
    ad_number: { type: Number },
    contents: { type: String },
    applicants: { type: Number},
    biases: { type: Array }
}));