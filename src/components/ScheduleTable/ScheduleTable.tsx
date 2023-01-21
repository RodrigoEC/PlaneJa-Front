import {
  useSubjectsTableContext,
  WeekSchedule,
} from "../../contexts/subjectsTable";
import { DailyColumn } from "../DailyColumn/DailyColumn";
import { OutWrapper, Wrapper } from "./ScheduleTable.style";

export const ScheduleTable = () => {
  const { subjects } = useSubjectsTableContext();

  return (
    <OutWrapper>
      <Wrapper>
        {Object.keys(subjects).map((value) => (
          <DailyColumn key={value} id={value as keyof WeekSchedule} />
        ))}
      </Wrapper>
    </OutWrapper>
  );
};
