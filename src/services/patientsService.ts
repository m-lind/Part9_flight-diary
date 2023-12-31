import data from "./../../data/patientsData";
import { Patient, NonSensitivePatientInfo, NewPatient } from "./../types";
import { v1 as uuid } from "uuid";

const patients: Patient[] = data;
const id: string = uuid();

const getNonSensitivePatientsInfo = (): NonSensitivePatientInfo[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getSensitivePatientsInfo = (): Patient[] => {
  return patients;
};

const getPatient = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: id,
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getNonSensitivePatientsInfo,
  addPatient,
  getPatient,
  getSensitivePatientsInfo,
};
