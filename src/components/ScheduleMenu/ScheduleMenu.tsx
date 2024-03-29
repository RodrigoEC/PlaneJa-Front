import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { LeftArrow, RightArrow, Wrapper, Index } from "./ScheduleMenu.style";

export const ScheduleMenu = () => {
  const {
    schedules,
    currentScheduleIndex,
    updateSchedule,
    nextSchedule,
    previousSchedule,
    addSchedule
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
          onClick={() => updateSchedule(i)}
          selected={i === currentScheduleIndex ? "T" : "F"}
        >
          {i + 1}
        </Index>
      ))}
      <Index
        key={'+'}
        title={"Adicionar nova tabela"}
        onClick={() => addSchedule()}
        selected={'F'}
      >
        +
      </Index>
      <RightArrow
        blocked={
          currentScheduleIndex + 1 === schedules.length ? "T" : undefined
        }
        onClick={nextSchedule}
      />
    </Wrapper>
  );
};
