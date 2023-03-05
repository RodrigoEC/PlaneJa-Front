export interface Record {
  name: string;
  enrollment_number: string;
  course: string;
  status: Status;
  progress: string;
  subjects: GradRecord[];
}

export interface enrollmentInfo {
  enrollments: string[][];
  subjects_available: string[];
  semester: Semester;
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



//

export interface Semester {
  _id?: string;
  name: string;
  semester: string;
  subjects_entries?: number;
  subjects: Subject[];
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


export interface UniqueSubjects {
  semester: string;
  subjects: string[];
}

// SubjectsTable

export interface SubjectContent {
  title: string;
  variant: string;
  position: number;
}

export interface WeekSchedule {
  seg: { name: string; subs: Array<SubjectContent | null> };
  ter: { name: string; subs: Array<SubjectContent | null> };
  quar: { name: string; subs: Array<SubjectContent | null> };
  qui: { name: string; subs: Array<SubjectContent | null> };
  sex: { name: string; subs: Array<SubjectContent | null> };
  sab: { name: string; subs: Array<SubjectContent | null> };
}

export const defaultSemester: Semester = {
  _id: '',
  name: "",
  semester: "",
  subjects_entries: 0,
  subjects: [],
};

export const defaultRecord: Record = {
  name: "",
  enrollment_number: "",
  course: "",
  status: { mandatory: [], optative: [], complementary: [] },
  progress: "",
  subjects: [],
};

export const enrollmentInfo: enrollmentInfo = {
  enrollments: [],
  subjects_available: [],
  semester: defaultSemester,
}

export const defaultRecordsResponse = {
  record: defaultRecord,
  enrollment_info: enrollmentInfo,
}