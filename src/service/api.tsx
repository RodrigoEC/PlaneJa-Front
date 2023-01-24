import axios from "axios";
import { WeekSchedule } from "../contexts/subjectsTable";
import {
  defaultRecord,
  defaultSemester,
  Record,
  UniqueSubjects,
} from "./types";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Cache-Control": "no-cache" },
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
  course: string
): Promise<[UniqueSubjects, number]> => {
  try {
    const response = await api.get("unique-subjects", {
      params: { name: course },
    });

    return [response.data || defaultSemester, response.status];
  } catch (e: any) {
    return [{ semester: "--", classes: [] }, e.response.status];
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
          title: "Fundamentos de matemática para ciência da computação II",
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

export const calculateSchedules = (
  data: any
): [WeekSchedule[], number] => {
  try {
    // ): Promise<[WeekSchedule[], number]> => {
    //   try {
    // const response = await api.get("unique-subjects", {
    //   params: { name: "Ciência da computação" },
    // });

    // response.data = subjects;
    // return [response.data, response.status]

    return [subjects, 200];
  } catch (e: any) {
    return [[], 400];
  }
};
