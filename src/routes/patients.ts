import express from "express";
import patientsService from "./../services/patientsService";

const router = express.Router();

router.get("/", (_req, res) => {
  const patients = patientsService.getNonSensitivePatientsInfo();
  res.send(patients);
});

router.post("/", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const addedPatient = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });
  res.json(addedPatient);
});

export default router;
