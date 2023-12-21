import data from "./../../data/patientsData";
import { Patient, NonSensitivePatientInfo } from "./../types";

const patients: Patient[] = data;

const getNonSensitivePatientsInfo = (): NonSensitivePatientInfo[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensitivePatientsInfo,
};
