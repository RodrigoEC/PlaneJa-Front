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