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

//

export interface Semester {
  name: string;
  semester: string;
  classes: Subject[];
}

export interface Subject {
  id: number;
  name: string;
  class_num: number;
  credits: number;
  workload: number;
  schedule: Schedule[];
}

export interface Schedule {
  day: string;
  init_time: string;
  end_time: string;
}

export const defaultSemester: Semester = {
  name: '',
  semester: '',
  classes: []
}


export interface UniqueSubjects {
  semester: string;
  classes: string[];
}