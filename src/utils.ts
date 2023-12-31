import { NewPatient, Gender } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseEntry = (entry: unknown): string => {
  if (!isString(entry)) {
    throw new Error("Incorrect or missing name");
  }
  return entry;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect date: " + date);
  }
  return date;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map(g => g.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender" + gender);
  }
  return gender;
};

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatient = {
      name: parseEntry(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseEntry(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseEntry(object.occupation),
      entries: [],
    };
    return newEntry;
  }

  throw new Error("Incorrect data: a field missing");
};

export default toNewPatient;
