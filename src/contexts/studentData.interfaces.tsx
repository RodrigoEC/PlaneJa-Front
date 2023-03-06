export interface StudentRecord {
  name: string;
  enrollment_number: string;
  course: string;
  status: Status;
  progress: string;
  subjects: SubjectRecord[];
}

export interface Status {
  mandatory: string[];
  optative: string[];
  complementary: string[];
}

export interface SubjectRecord {
  id: number;
  name: string;
  type: string;
  credits: number;
  workload: number;
  grade: number;
  status: string;
  semester: string;
}

export const defaultStudentRecord: StudentRecord = {
  name: "",
  enrollment_number: "",
  course: "",
  status: { mandatory: [], optative: [], complementary: [] },
  progress: "",
  subjects: [],
};