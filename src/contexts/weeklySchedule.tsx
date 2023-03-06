import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { calculateSchedules } from "../service/api";
import { defaultSchedule, defaultScheduleList } from "../util/constants";
import { defaultFunction, getLocalStorage } from "../util/util";
import { SubjectContent, WeekSchedule } from "./weeklySchedule.interfaces";

interface SubjectsTableContent {
  scheduleList: WeekSchedule[];
  setScheduleList: Function;
  currentSchedule: WeekSchedule;
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
  scheduleList: [],
  setScheduleList: defaultFunction,
  currentSchedule: defaultSchedule,
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
  const [scheduleList, setScheduleList] = useState<WeekSchedule[]>(
    getLocalStorage("planeja@schedules", defaultScheduleList)
  );
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState<number>(0);
  const [currentSchedule, setCurrentSchedule] =
    useState<WeekSchedule>(defaultSchedule);

  const updateSchedule = useCallback(
    (id: number) => {
      setCurrentScheduleIndex(id);
      const newSchedule = JSON.parse(JSON.stringify(defaultSchedule));
      const subjectsList = scheduleList[id];

      Object.keys(subjectsList).forEach((value: string) => {
        const subjects = new Array(8).fill(null);

        subjectsList[value as keyof WeekSchedule].subs.forEach(
          (subElement: SubjectContent | null) => {
            if (subElement !== null) {
              subjects[subElement.position] = subElement;
            }
          }
        );

        newSchedule[value as keyof WeekSchedule].subs = subjects;
      });

      setCurrentSchedule(newSchedule);
    },

    [scheduleList, currentScheduleIndex]
  );

  const nextSchedule = () => {
    if (currentScheduleIndex < scheduleList.length - 1) {
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
        setScheduleList(data);
      }
    },
    []
  );

  useEffect(() => {
    updateSchedule(currentScheduleIndex);
  }, [updateSchedule, currentScheduleIndex, scheduleList]);

  const value = {
    scheduleList,
    setScheduleList,
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

