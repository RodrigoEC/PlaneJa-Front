import { defaultStudentRecord, StudentRecord } from "./studentData.interfaces";
import { Subject } from "./restraints.interfaces";

export interface ExtractionResponse {
  record: StudentRecord;
  enrollment_info: EnrollmentInfo;
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
  enrollment_info: EnrollmentInfo,
};
