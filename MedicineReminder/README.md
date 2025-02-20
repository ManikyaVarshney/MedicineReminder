# Medicine Reminder System

## Project Overview
This project allows users to track patient details, store medicine schedules, generate QR codes for medicine access, and store data in Google Drive.

## Features
- Add and store patient details (up to 11+ patients)
- Assign medicine schedules with start & end time
- Generate QR codes for patient records
- Store patient data in Google Drive
- Send emergency alerts if medicine is missed

## Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd MedicineReminder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
- **POST /addPatient** - Add a new patient
- **GET /getPatients** - Retrieve patient details

## How to Upload to GitHub
1. Initialize Git:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to GitHub:
   ```sh
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Technologies Used
- Node.js, Express, MongoDB
- QR Code Generation API
- Google Drive API

## Author
Developed by Manikya.
