import { Subject } from "../contexts/weeklySchedule.interfaces";
import { RomanNumerals } from "./constants";

export const capitalize = (string: string): string => {
  const words = string.split(" ");
  const wordsCapitalized = words.map(
    (word) => {
      if (RomanNumerals.includes(word.toUpperCase())) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
  );

  return wordsCapitalized.join(" ");
};

export const getLocalStorage = (key: string, defaultValue: any) => {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const defaultFunction = () => {};

export const handleLocalStorageStateUpdate = (
  key: string,
  stateUpdate: Function,
  value: any
) => {
  stateUpdate(value);
  setLocalStorage(key, value);
};

export const filterSubjects = (subjectId: string, subjects: Subject[]): Subject | null => {
  const [classId, classNum] = subjectId.split(".");
  const subject = subjects.filter(
    (element: Subject) =>
      element.id === classId && element.class_num === classNum
  );

  if (subject) return subject[0]
  return null
};

export const removeWordAccent = (word: string) => {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}