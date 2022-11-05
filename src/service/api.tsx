import axios from "axios";
import { defaultRecord, Record } from "./types";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const extractRecord = async (formData: FormData): Promise<Record> => {
  try {
    const response = await api.post("/records", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (e) {
    console.log(e)
    return defaultRecord;
  }
};
