import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { calculateSchedules } from "../service/api";
import { defaultSchedule, defaultSchedules } from "../util/constants";
import { defaultFunction } from "../util/util";

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

export interface SubjectsTableContent {
  schedules: WeekSchedule[];
  setSchedules: Function;
  currentSchedule: WeekSchedule;
  setCurrentSchedule: Function;
  currentScheduleIndex: number;
  setCurrentScheduleIndex: Function;
  loading: boolean;
  setLoading: Function;
  nextSchedule: Function;
  previousSchedule: Function;
  changeSchedule: Function;
  getSchedulesData: Function;
}

const SubjectsTableContext = createContext<SubjectsTableContent>({
  schedules: [],
  setSchedules: defaultFunction,
  currentSchedule: defaultSchedule,
  setCurrentSchedule: defaultFunction,
  currentScheduleIndex: 0,
  setCurrentScheduleIndex: defaultFunction,
  loading: false,
  setLoading: defaultFunction,
  nextSchedule: defaultFunction,
  previousSchedule: defaultFunction,
  changeSchedule: defaultFunction,
  getSchedulesData: defaultFunction,
});

export const SubjectsTableProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [schedules, setSchedules] = useState(
    JSON.parse(
      localStorage.getItem("planeja@schedules") ||
        JSON.stringify(defaultSchedules)
    )
  );
  const [loading, setLoading] = useState(false);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);
  const [currentSchedule, setCurrentSchedule] = useState(defaultSchedule);

  const changeSchedule = useCallback(
    (id: number) => {
      setCurrentScheduleIndex(id);
      const newSchedule = JSON.parse(JSON.stringify(defaultSchedule));

      Object.keys(schedules[id]).forEach((value: string) => {
        const subjects = new Array(8).fill(null);
        schedules[id][value as keyof WeekSchedule].subs.forEach(
          (subElement: SubjectContent | null, i: number) => {
            if (subElement !== null) {
              subjects[subElement.position] = subElement;
            }
          }
        );

        newSchedule[value as keyof WeekSchedule].subs = subjects;
      });

      setCurrentSchedule(newSchedule);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedules, currentScheduleIndex]
  );

  const nextSchedule = () => {
    if (currentScheduleIndex < schedules.length - 1) {
      changeSchedule(currentScheduleIndex + 1);
    }
  };

  const previousSchedule = () => {
    if (currentScheduleIndex > 0) {
      changeSchedule(currentScheduleIndex - 1);
    }
  };

  const getSchedulesData = useCallback(async(studentSubjects: any, requiresSubjects: any) => {
    const [data, status] = await calculateSchedules(studentSubjects, requiresSubjects);
    if (data.length > 0 && status !== 400) {
      localStorage.setItem("planeja@schedules", JSON.stringify(data));
      setSchedules(data);
    }
  }, []);

  useEffect(() => {
    changeSchedule(currentScheduleIndex);
  }, [changeSchedule, currentScheduleIndex, schedules]);

  const value = {
    schedules,
    setSchedules,
    loading,
    setLoading,
    currentSchedule,
    setCurrentSchedule,
    currentScheduleIndex,
    setCurrentScheduleIndex,
    nextSchedule,
    previousSchedule,
    changeSchedule,
    getSchedulesData,
  };

  return (
    <SubjectsTableContext.Provider value={value}>
      {children}
    </SubjectsTableContext.Provider>
  );
};

export const useSubjectsTableContext = () => {
  return { ...useContext(SubjectsTableContext) };
};
