const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name: String,
    medicine: String,
    startTime: String,
    endTime: String,
    qr: String
});

module.exports = mongoose.model("Patient", PatientSchema);
