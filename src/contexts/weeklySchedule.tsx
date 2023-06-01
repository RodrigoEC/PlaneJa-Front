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
import { Schedule, Subject } from "./weeklySchedule.interfaces";

interface SubjectsTableContent {
  schedules: Subject[][];
  setSchedules: Function;

  availableSubs: Subject[];
  setAvailableSubs: Function;

  filteredSubjects: Subject[];
  setFilteredSubjects: Function;

  currentSchedule: Array<Subject[] | null[]>;
  setCurrentSchedule: Function;

  currentScheduleIndex: number;
  setCurrentScheduleIndex: Function;

  TableLoading: boolean;
  setTableLoading: Function;

  nextSchedule: Function;
  previousSchedule: Function;
  updateSchedule: Function;

  getSchedulesData: Function;

  addSchedule: Function;

  removeSchedule: Function;

  addSubject: Function;

  removeSubject: Function;

  searchedSubjects: Subject[];
  setSearchedSubject: Function;
}

const SubjectsTableContext = createContext<SubjectsTableContent>({
  schedules: [],
  setSchedules: defaultFunction,
  availableSubs: [],
  setAvailableSubs: defaultFunction,
  filteredSubjects: [],
  setFilteredSubjects: defaultFunction,
  currentSchedule: [],
  setCurrentSchedule: defaultFunction,
  currentScheduleIndex: 0,
  setCurrentScheduleIndex: defaultFunction,
  TableLoading: false,
  setTableLoading: defaultFunction,
  nextSchedule: defaultFunction,
  previousSchedule: defaultFunction,
  updateSchedule: defaultFunction,
  getSchedulesData: defaultFunction,
  addSchedule: defaultFunction,
  removeSchedule: defaultFunction,
  addSubject: defaultFunction,
  removeSubject: defaultFunction,
  searchedSubjects: [],
  setSearchedSubject: defaultFunction,
});

export const SubjectsTableProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [TableLoading, setTableLoading] = useState<boolean>(false);

  const [availableSubs, setAvailableSubs] = useState<Subject[]>(
    getLocalStorage("planeja@available_subjects", [])
  );

  const [filteredSubjects, setFilteredSubjects] =
    useState<Subject[]>(availableSubs);

  const [schedules, setSchedules] = useState<Subject[][]>(
    getLocalStorage("planeja@schedules", [[]])
  );

  const [searchedSubjects, setSearchedSubject] =
    useState<Subject[]>(filteredSubjects);

  const [currentSchedule, setCurrentSchedule] = useState<
    Array<Subject[] | null[]>
  >(defaultCurrentSchedule());

  const [currentScheduleIndex, setCurrentScheduleIndex] = useState<number>(0);

  const updateSub = (func: Function) => {
    const oldSchedules = schedules;

    let currentOldSchedule: Subject[] = schedules[currentScheduleIndex];

    currentOldSchedule = func(currentOldSchedule);

    oldSchedules[currentScheduleIndex] = currentOldSchedule;
    setSchedules(oldSchedules);
    localStorage.setItem("planeja@schedules", JSON.stringify(oldSchedules));
    updateSchedule(currentScheduleIndex);
  };

  const addSubject = (subject: Subject) => {
    if (!subject.available) return false;

    let conflict = false;

    subject.schedule.forEach((schedule: Schedule) => {
      const init_time = parseInt(schedule.init_time.split(":")[0]);

      if (conflict) {
        return;
      } else {
        conflict =
          currentSchedule[(parseInt(schedule.day) - 2) as number][
            (init_time - 8) / 2
          ] !== null;
      }
    });

    if (!conflict) {
      updateSub((oldSubs: Subject[]) => [...oldSubs, subject]);
      return true;
    }

    return false;
  };

  const removeSubject = (subject: Subject) => {
    updateSub((oldSubs: Subject[]) =>
      oldSubs.filter(
        (sub: Subject) =>
          subject.name !== sub.name || subject.class_num !== sub.class_num
      )
    );
  };

  const updateFilteredSubs = useCallback(() => {
    const subsIds = schedules[currentScheduleIndex].map(
      (sub: Subject) => sub.name
    );

    const newAvailableSubs = availableSubs.filter(
      (sub: Subject) => !subsIds.includes(sub.name)
    );
    newAvailableSubs.forEach((sub: Subject) => {
      sub.available = sub.schedule.every((sched: Schedule) => {
        const init_time = parseInt(sched.init_time.split(":")[0]);
        return (
          currentSchedule[(parseInt(sched.day) - 2) as number][
            (init_time - 8) / 2
          ] === null
        );
      });
    });


    setFilteredSubjects(newAvailableSubs);
    setSearchedSubject(newAvailableSubs);
  }, [schedules, currentScheduleIndex, availableSubs, currentSchedule]);

  const updateSchedule = useCallback(
    (id: number) => {
      setCurrentScheduleIndex(id);
      setTableLoading(true);

      const newHours: Array<Subject[] | null[]> = defaultCurrentSchedule();
      const newSubjects = schedules[id]?.map((s, i) => ({
        ...s,
        variant: Object.keys(colors)[i],
      }));

      newSubjects?.forEach((subject: Subject) => {
        subject?.schedule?.forEach((schedule: Schedule) => {
          const init = Number(schedule.init_time.split(":")[0]);
          newHours[Number(schedule.day) - 2][(init - 8) / 2] = subject;
        });
      });

      setCurrentSchedule(newHours);
      setTimeout(() => {
        setTableLoading(false);
      }, 200);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentScheduleIndex, currentSchedule, schedules, filteredSubjects]
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

  const addSchedule = () => {
    const newSchedule = [...schedules, []];
    localStorage.setItem("planeja@schedules", JSON.stringify(newSchedule));
    setSchedules(newSchedule);
    setCurrentScheduleIndex(newSchedule.length - 1);

  };

  const removeSchedule = () => {
    let newSchedule: Subject[][] = [[]]
    if (schedules.length !== 1) {
      newSchedule = schedules.filter((_, index) => index !== currentScheduleIndex);
    }

    localStorage.setItem("planeja@schedules", JSON.stringify(newSchedule));
    setSchedules(newSchedule);
    setCurrentScheduleIndex(0);
  }

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
    updateFilteredSubs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSchedule, availableSubs]);

  useEffect(() => {
    updateSchedule(currentScheduleIndex);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScheduleIndex, schedules]);

  const value = {
    schedules,
    setSchedules,
    TableLoading,
    setTableLoading,
    currentSchedule,
    setCurrentSchedule,
    currentScheduleIndex,
    setCurrentScheduleIndex,
    nextSchedule,
    previousSchedule,
    updateSchedule,
    getSchedulesData,
    addSchedule,
    removeSchedule,
    addSubject,
    removeSubject,
    filteredSubjects,
    setFilteredSubjects,
    availableSubs,
    setAvailableSubs,
    searchedSubjects,
    setSearchedSubject,
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
