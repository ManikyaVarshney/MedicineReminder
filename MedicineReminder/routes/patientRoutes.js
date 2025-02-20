const express = require("express");
const { addPatient, getPatients } = require("../controllers/patientController");

const router = express.Router();

router.post("/addPatient", addPatient);
router.get("/getPatients", getPatients);

module.exports = router;
