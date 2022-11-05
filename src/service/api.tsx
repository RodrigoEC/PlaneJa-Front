import axios from "axios";
import { defaultRecord, defaultSemester, Record, Semester } from "./types";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const extractRecord = async (
  formData: FormData
): Promise<[Record, number]> => {
  try {
    const response = await api.post("/records", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return [response.data, response.status];
  } catch (e: any) {
    return [defaultRecord, e.response.status];
  }
};

export const getSemesterSubjects = async (
  course: string,
  semester?: string
): Promise<[Semester, number]> => {
  try {
    const response = await api.get("classes-offered", {
      params: { name: course, semester},
    });

    console.log(response)

    return [response.data || defaultSemester, response.status];
  } catch (e: any) {
    return [defaultSemester, e.response.status];
  }
};
