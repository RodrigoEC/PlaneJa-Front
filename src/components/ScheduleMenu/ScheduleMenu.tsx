import { useSubjectsTableContext } from "../../contexts/subjectsTable";
import { LeftArrow, RightArrow, Wrapper, Index } from "./ScheduleMenu.style";

export const ScheduleMenu = () => {
  const { schedules, currentScheduleIndex, changeSchedule } =
    useSubjectsTableContext();

  return (
    <Wrapper>
      <LeftArrow blocked={"false"} />
      {schedules.map((_, i) => (
        <Index
          key={i}
          onClick={() => changeSchedule(i)}
          selected={i === currentScheduleIndex ? 'T': 'F'}
        >
          {i + 1}
        </Index>
      ))}
      <RightArrow blocked={"false"} />
    </Wrapper>
  );
};
