import { ReactElement, useCallback } from "react";
import { colors } from "../../util/colors";
import { capitalize } from "../../util/util";
import { About, Wrapper, Title, AboutContainer } from "./SubjectCard.styles";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { Subject } from "../../contexts/weeklySchedule.interfaces";

export const SubjectCard = ({
  variant,
  subject,
}: {
  variant: string;
  subject: Subject;
}): ReactElement => {
  const { removeSubject } = useSubjectsTableContext();
  const { name: title, class_num } = subject;

  const displayedTitle =
    title.length > 35 ? title.slice(0, 23) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    removeSubject(subject);

  }, [removeSubject, subject]);

  return (
    <Wrapper
      title={`${subject.name} - T${subject.class_num}`}
      variant={variant as keyof typeof colors}
    >
      <Title>
        {capitalize(displayedTitle)} - T{class_num}
      </Title>
      <AboutContainer>
        <About onClick={onClick}>remover</About>
      </AboutContainer>
    </Wrapper>
  );
};
