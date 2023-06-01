import { ReactElement, useCallback } from "react";
import { capitalize } from "../../util/util";
import {
  Title,
  Button,
  ScheduleContainer,
  InnerContainer,
  Wrapper,
  Day,
  ScheduleTime,
} from "./SubjectAvailableCard.styles";
import { DayOfTheWeek, numberToDay } from "../../util/constants";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { Schedule, Subject } from "../../contexts/weeklySchedule.interfaces";

export const SubjectAvailableCard = ({
  subject,
}: {
  subject: Subject;
}): ReactElement => {
  const { addSubject } = useSubjectsTableContext();
  const { name, class_num, schedule, available } = subject;
  const isAvailable = available || false;

  const add = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      addSubject(subject);
    },
    [addSubject, subject]
  );

  return (
    <Wrapper>
      <InnerContainer>
        <Title>
          {capitalize(name)} - T{class_num}
        </Title>
        <ScheduleContainer>
          {schedule.map((schedule: Schedule, index: number) => (
            <div key={`${index}-schedule`}>
              <Day>{numberToDay[schedule.day as DayOfTheWeek]}</Day>{" "}
              <ScheduleTime>
                {schedule.init_time} - {schedule.end_time}
              </ScheduleTime>
            </div>
          ))}
        </ScheduleContainer>
      </InnerContainer>
      <Button isAvailable={isAvailable ? "T" : "F"} onClick={add}>
        {isAvailable ? "Adicionar" : "Horário indisponível"}
      </Button>
    </Wrapper>
  );
};
