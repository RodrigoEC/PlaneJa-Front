import { useSubjectsTableContext } from "../../contexts/subjectsTable";
import { LeftArrow, RightArrow, Wrapper, Index } from "./ScheduleMenu.style";

export const ScheduleMenu = () => {
  const {
    schedules,
    currentScheduleIndex,
    changeSchedule,
    nextSchedule,
    previousSchedule,
  } = useSubjectsTableContext();

  return (
    <Wrapper>
      <LeftArrow
        blocked={currentScheduleIndex === 0 ? "T" : undefined}
        onClick={previousSchedule}
      />
      {schedules.map((_, i) => (
        <Index
          key={i}
          onClick={() => changeSchedule(i)}
          selected={i === currentScheduleIndex ? "T" : "F"}
        >
          {i + 1}
        </Index>
      ))}
      <RightArrow
        blocked={
          currentScheduleIndex + 1 === schedules.length ? "T" : undefined
        }
        onClick={nextSchedule}
      />
    </Wrapper>
  );
};
