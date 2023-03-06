import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { scheduleTemplate } from "../../util/constants";
import { DailyColumn } from "../DailyColumn/DailyColumn";
import { TableContent, Wrapper, Timing, Time } from "./ScheduleTable.style";

export const ScheduleTable = () => {

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
        {scheduleTemplate.map((value, i) => (
          <DailyColumn key={i} columnInfo={value} />
        ))}
      </TableContent>
    </Wrapper>
  );
};
