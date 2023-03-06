import {
  useSubjectsTableContext,
} from "../../contexts/weeklySchedule";
import { WeekSchedule } from "../../contexts/weeklySchedule.interfaces";
import { DailyColumn } from "../DailyColumn/DailyColumn";
import { TableContent, Wrapper, Timing, Time } from "./ScheduleTable.style";

export const ScheduleTable = () => {
  const { currentSchedule } = useSubjectsTableContext();

  return (
    <Wrapper>
      <Timing>
        {Array(9)
          .fill(2)
          .map((value: number, i: number) => (
            <Time key={`${value * i + 8}-hours`}>{value * i + 8}h</Time>
          ))}
      </Timing>
      <TableContent>
        {Object.keys(currentSchedule).map((value) => (
          <DailyColumn key={value} index={value as keyof WeekSchedule} />
        ))}
      </TableContent>
    </Wrapper>
  );
};
