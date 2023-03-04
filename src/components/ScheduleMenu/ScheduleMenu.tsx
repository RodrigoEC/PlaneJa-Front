import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { LeftArrow, RightArrow, Wrapper, Index } from "./ScheduleMenu.style";

export const ScheduleMenu = () => {
  const {
    scheduleList,
    currentScheduleIndex,
    updateSchedule,
    nextSchedule,
    previousSchedule,
  } = useSubjectsTableContext();

  return (
    <Wrapper>
      <LeftArrow
        blocked={currentScheduleIndex === 0 ? "T" : undefined}
        onClick={previousSchedule}
      />
      {scheduleList.map((_, i) => (
        <Index
          key={i}
          onClick={() => updateSchedule(i)}
          selected={i === currentScheduleIndex ? "T" : "F"}
        >
          {i + 1}
        </Index>
      ))}
      <RightArrow
        blocked={
          currentScheduleIndex + 1 === scheduleList.length ? "T" : undefined
        }
        onClick={nextSchedule}
      />
    </Wrapper>
  );
};
