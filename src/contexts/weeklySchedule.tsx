import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { calculateSchedules } from "../service/api";
import { colors } from "../util/colors";
import { defaultCurrentSchedule } from "../util/constants";
import { defaultFunction, getLocalStorage } from "../util/util";
import { Schedule, Subject } from "./restraints.interfaces";

interface SubjectsTableContent {
  schedules: Subject[][];
  setSchedules: Function;
  currentSchedule: Array<Subject[] | null[]>;
  setCurrentSchedule: Function;
  currentScheduleIndex: number;
  setCurrentScheduleIndex: Function;
  loading: boolean;
  setLoading: Function;
  nextSchedule: Function;
  previousSchedule: Function;
  updateSchedule: Function;
  getSchedulesData: Function;
}

const SubjectsTableContext = createContext<SubjectsTableContent>({
  schedules: [],
  setSchedules: defaultFunction,
  currentSchedule: [],
  setCurrentSchedule: defaultFunction,
  currentScheduleIndex: 0,
  setCurrentScheduleIndex: defaultFunction,
  loading: false,
  setLoading: defaultFunction,
  nextSchedule: defaultFunction,
  previousSchedule: defaultFunction,
  updateSchedule: defaultFunction,
  getSchedulesData: defaultFunction,
});

export const SubjectsTableProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [schedules, setSchedules] = useState<Subject[][]>(
    getLocalStorage("planeja@schedules", [[]])
  );
  const [currentSchedule, setCurrentSchedule] = useState<
    Array<Subject[] | null[]>
  >(defaultCurrentSchedule());
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState<number>(0);

  const updateSchedule = useCallback(
    (id: number) => {
      setCurrentScheduleIndex(id);

      const newHours: Array<Subject[] | null[]>  = defaultCurrentSchedule();
      const newSubjects = schedules[id].map((s, i) => ({
        ...s,
        variant: Object.keys(colors)[i],
      }));

      newSubjects?.forEach((subject: Subject) => {
        subject.schedule.forEach((schedule: Schedule) => {
          const init = Number(schedule.init_time.split(":")[0]);
          newHours[Number(schedule.day) - 2][(init - 8) / 2] = subject;
        });
      });

      setCurrentSchedule(newHours);
    },

    [currentScheduleIndex, currentSchedule, schedules]
  );

  const nextSchedule = () => {
    if (currentScheduleIndex < schedules.length - 1) {
      updateSchedule(currentScheduleIndex + 1);
    }
  };

  const previousSchedule = () => {
    if (currentScheduleIndex > 0) {
      updateSchedule(currentScheduleIndex - 1);
    }
  };

  const getSchedulesData = useCallback(
    async (studentSubjects: any, requiresSubjects: any) => {
      const [data, status] = await calculateSchedules(
        studentSubjects,
        requiresSubjects
      );
      if (data.length > 0 && status !== 400) {
        localStorage.setItem("planeja@schedules", JSON.stringify(data));
        setSchedules(data);
      }
    },
    []
  );

  useEffect(() => {
    updateSchedule(currentScheduleIndex);
  }, [currentScheduleIndex, schedules]);

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
    updateSchedule,
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
