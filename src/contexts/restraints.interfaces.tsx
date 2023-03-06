export interface Subject {
  id: string;
  name: string;
  class_num: string;
  credits: number;
  workload: number;
  schedule: Schedule[];
  variant?: string;
}

export interface Schedule {
  day: string;
  init_time: string;
  end_time: string;
}