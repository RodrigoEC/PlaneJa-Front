import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { colors } from "../../util/colors";
import { capitalize } from "../../util/util";
import { LockedIcon, UnlockedIcon, Wrapper, Title } from "./SubjectCard.styles";

export const SubjectCard = ({
  variant,
  subject,
}: {
  variant: string;
  subject: Subject;
}): ReactElement => {
  const {
    numEssentialSubjects,
    availableSubjects,
    essentialSubjects,
    setEssentialSubjects,
  } = useRestraintsContext();
  const title = subject.name;
  const [hasSubject, setHasSubject] = useState<boolean>(false);

  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    if (hasSubject) {
      const filteredSubjects = essentialSubjects.filter(
        (s: Subject) =>
          s.name !== subject.name || subject.class_num !== s.class_num
      );

      setEssentialSubjects(filteredSubjects);
    } else if (availableSubjects.length < numEssentialSubjects) {
      setEssentialSubjects([...essentialSubjects, subject]);
    }
  }, [essentialSubjects, setEssentialSubjects, hasSubject]);

  useEffect(() => {
    const hasSub = essentialSubjects.find(
      (s: Subject) =>
        s.name === subject.name && subject.class_num === s.class_num
    );

    setHasSubject(hasSub !== undefined);
  }, [essentialSubjects, setEssentialSubjects, setHasSubject]);

  return (
    <Wrapper
      title={`${subject.name} - T${subject.class_num}`}
      onClick={onClick}
      variant={variant as keyof typeof colors}
      blocked={(
        availableSubjects.length === numEssentialSubjects &&
        !availableSubjects.filter((subject) => title === subject.name)
      ).toString()}
    >
      <Title>{capitalize(displayedTitle)}</Title>
      {hasSubject ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
