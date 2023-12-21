import data from "./../../data/diagnosesData";
import { Diagnose } from "./../types";

const diagnoses: Diagnose[] = data;

const getDiagnoses = (): Diagnose[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
