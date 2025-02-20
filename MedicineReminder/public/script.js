async function addPatient() {
    const name = document.getElementById("patient-name").value;
    const medicine = document.getElementById("medicine").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;

    const response = await fetch("http://localhost:5000/addPatient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, medicine, startTime, endTime })
    });

    const result = await response.json();
    alert(result.message);
    loadPatients();
}

async function loadPatients() {
    const response = await fetch("http://localhost:5000/getPatients");
    const patients = await response.json();
    const list = document.getElementById("patient-data");
    list.innerHTML = "";
    patients.forEach(patient => {
        list.innerHTML += `<li>${patient.name} - ${patient.medicine} (QR: <a href="${patient.qr}" target="_blank">View</a>)</li>`;
    });
}

loadPatients();
