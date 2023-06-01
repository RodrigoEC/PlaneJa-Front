import { defaultStudentRecord, StudentRecord } from "./studentData.interfaces";
import { Subject } from "./weeklySchedule.interfaces";

export interface ExtractionResponse {
  record: StudentRecord;
  semester_data: {
    semester: string;
    available_subjects: Subject[];
  }
}

export interface EnrollmentInfo {
  semester: string;
  enrollments: Subject[][];
  subjects_available: Subject[];
}

export const EnrollmentInfo: EnrollmentInfo = {
  semester: "",
  enrollments: [],
  subjects_available: [],
};

export interface ErrorInterface {
  code: number | string;
  warn: boolean;
}

export const defaultExtractionResponse = {
  record: defaultStudentRecord,
  semester_data: {
    semester: '--',
    available_subjects: [],
  }
};
