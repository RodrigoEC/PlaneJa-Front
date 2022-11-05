export interface Record {
  name: string;
  enrollment_number: string;
  course: string;
  status: Status;
  progress: string;
  classes: GradRecord[];
}

export interface Status {
  mandatory: string[];
  optative: string[];
  complementary: string[];
}

export interface GradRecord {
  id: number;
  name: string;
  type: string;
  credits: number;
  workload: number;
  grade: number;
  status: string;
  semester: string;
}

export const defaultRecord: Record = {
  name: "",
  enrollment_number: "",
  course: "",
  status: { mandatory: [], optative: [], complementary: [] },
  progress: '',
  classes: []
};