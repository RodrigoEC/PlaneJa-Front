import axios from "axios";
import { defaultExtractionResponse, ExtractionResponse } from "../contexts/extraction.interfaces";
import { Subject } from "../contexts/weeklySchedule.interfaces";


const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Cache-Control": "no-cache" },
});

export const extractRecord = async (
  formData: FormData
): Promise<[ExtractionResponse, number]> => {
  try {
    const response = await api.post("/records", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return [response.data, response.status];
  } catch (e: any) {
    return [defaultExtractionResponse, e.response.status];
  }
};

export const calculateSchedules = async (
  student_subjects: any,
  required_subjects: string[]
): Promise<[Array<Subject[]>, number]> => {
  try {
    const response = await api.post("/recommend", {
      student_subjects,
      required_subjects,
    });

    return [response.data, response.status];
  } catch (e: any) {
    return [[], 400];
  }
};
