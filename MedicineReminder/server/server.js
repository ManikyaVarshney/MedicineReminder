const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const patientRoutes = require("../routes/patientRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", patientRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
