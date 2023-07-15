export interface Schedule {
  day: string;
  init_time: string;
  end_time: string;
}

export interface Subject {
  id: string;
  name: string;
  class_num: string;
  credits: number;
  workload: number;
  schedule: Schedule[];
  variant?: string;
  available?: boolean;
  professors?: string[];
}

export interface WeeklySchedule {
  availableSubs: Subject[];
  subjects: Subject[];
}

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