import axios from "axios";
import { defaultExtractionResponse, ExtractionResponse } from "../contexts/extraction.interfaces";
import { Subject } from "../contexts/restraints.interfaces";
import { WeekSchedule } from "../contexts/weeklySchedule.interfaces";


const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Cache-Control": "no-cache" },
});

export const extractRecord = async (
  formData: FormData
): Promise<[ExtractionResponse, number]> => {
  try {
    const response = await api.post("/records?recommend", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return [response.data, response.status];
  } catch (e: any) {
    return [defaultExtractionResponse, e.response.status];
  }
};

const subjects = [
  {
    seg: {
      name: "segunda-feira",
      subs: [
        {
          title: "Fundamentos de matemática para ciência da computação II",
          variant: "cyan",
          position: 2,
          locked: true,
        },
      ],
    },
    ter: {
      name: "terça-feira",
      subs: [
        {
          title: "Banco De Dados Ii",
          variant: "lightOrange",
          position: 4,
          locked: true,
        },
      ],
    },
    quar: { name: "quarta-feira", subs: [] },
    qui: { name: "quinta-feira", subs: [] },
    sex: { name: "sexta-feira", subs: [] },
    sab: { name: "sábado", subs: [] },
  },
  {
    seg: {
      name: "segunda-feira",
      subs: [
        {
          title: "Fundamentos de matemática para ciência da computação II",
          variant: "cyan",
          position: 3,
          locked: true,
        },
      ],
    },
    ter: {
      name: "terça-feira",
      subs: [
        {
          title: "Fundamentos de matemática para ciência da computação II",
          variant: "cyan",
          position: 1,
          locked: true,
        },
      ],
    },
    quar: { name: "quarta-feira", subs: [] },
    qui: { name: "quinta-feira", subs: [] },
    sex: { name: "sexta-feira", subs: [] },
    sab: { name: "sábado", subs: [] },
  },
];

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
