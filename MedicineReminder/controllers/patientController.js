const Patient = require("../models/Patient");
const QRCode = require("qrcode");

exports.addPatient = async (req, res) => {
    try {
        const { name, medicine, startTime, endTime } = req.body;
        const qrData = `Name: ${name}, Medicine: ${medicine}, Start: ${startTime}, End: ${endTime}`;
        const qrCode = await QRCode.toDataURL(qrData);

        const patient = new Patient({ name, medicine, startTime, endTime, qr: qrCode });
        await patient.save();
        res.json({ message: "Patient added successfully", qr: qrCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
