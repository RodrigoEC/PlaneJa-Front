import { ReactElement, useCallback, useState } from "react";
import { capitalize } from "../../util/util";
import {
  Title,
  Button,
  ScheduleContainer,
  InnerContainer,
  Wrapper,
  Day,
  ScheduleTime,
  ButtonsContainer,
  SubWrapper,
  ListItem,
  ListTitle,
  ListContent,
  SubList,
  InlineList,
  ClassNumber,
  Divider,
} from "./SubjectAvailableCard.styles";
import { DayOfTheWeek, numberToDay } from "../../util/constants";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { Schedule, Subject } from "../../contexts/weeklySchedule.interfaces";
import { Modal } from "../Modal/Modal";

export const SubjectAvailableCard = ({
  subject,
}: {
  subject: Subject;
}): ReactElement => {
  const { addSubject } = useSubjectsTableContext();
  const [showSub, setShowSub] = useState<boolean>(false);
  const { name, class_num, schedule, available } = subject;
  const isAvailable = available || false;

  const add = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      addSubject(subject);
    },
    [addSubject, subject]
  );

  const datailSub = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      setShowSub(true);
    },
    [setShowSub]
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
      <ButtonsContainer>
        <Button isAvailable={isAvailable ? "T" : "F"} onClick={add}>
          {isAvailable ? "Adicionar" : "Horário conflitante"}
        </Button>
        <Button isAvailable={"T"} onClick={datailSub}>
          Detalhar
        </Button>
      </ButtonsContainer>
      {showSub && (
        <Modal
          title={name}
          onClose={() => setShowSub(false)}
          children={<SubContent subject={subject} />}
        />
      )}
    </Wrapper>
  );
};

const SubContent = ({ subject }: { subject: Subject }) => {
  return (
    <SubWrapper>
      <SubList>
        <ListItem>
          <ListTitle>Nome:</ListTitle>{" "}
          <ListContent>{capitalize(subject.name)}</ListContent>
        </ListItem>
        <Divider/>
        <InlineList>
          <ListItem>
            <ListTitle>Turma:</ListTitle>{" "}
            <ClassNumber>{subject.class_num}</ClassNumber>
          </ListItem>
          <ListItem>
            <ListTitle>Carga Horária:</ListTitle>{" "}
            <ListContent>{subject.workload}</ListContent>
          </ListItem>
          <ListItem>
            <ListTitle>Créditos:</ListTitle>{" "}
            <ListContent>{subject.credits}</ListContent>
          </ListItem>
        </InlineList>
        <Divider/>
        <ListTitle>Professores:</ListTitle>{" "}
        {subject.professors?.map(
          (prof: string | null) =>
            prof && <ListItem>- {capitalize(prof)}</ListItem>
        )}
        <Divider/>
        <ListTitle>Horários:</ListTitle>
        {subject.schedule?.map((schedule: Schedule) => (
          <ListItem>
            -{" "}
            <ListTitle>
              {numberToDay[`${schedule.day}` as DayOfTheWeek]}
            </ListTitle>{" "}
            {schedule.init_time} - {schedule.end_time}
          </ListItem>
        ))}
      </SubList>
    </SubWrapper>
  );
};
