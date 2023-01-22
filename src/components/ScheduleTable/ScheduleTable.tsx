import {
  useSubjectsTableContext,
  WeekSchedule,
} from "../../contexts/subjectsTable";
import { DailyColumn } from "../DailyColumn/DailyColumn";
import { TableContent, Wrapper, Timing, Time } from "./ScheduleTable.style";


export const ScheduleTable = () => {
  const { subjects } = useSubjectsTableContext();

  const time = []
  return (
    <Wrapper>
      <Timing>
        {Array(9).fill(2).map((value: number, i: number) => <Time>{value * i + 8}h</Time>)}
      </Timing>
      <TableContent>
        {Object.keys(subjects).map((value) => (
          <DailyColumn key={value} id={value as keyof WeekSchedule} />
        ))}
      </TableContent>
    </Wrapper>
  );
};
