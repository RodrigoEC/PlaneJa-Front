import { ReactElement, useCallback } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { colors } from "../../util/colors";
import { LockedIcon, UnlockedIcon, Wrapper } from "./SubjectCard.styles";

export const SubjectCard = ({
  variant,
  title,
}: {
  variant: string;
  title: string;
}): ReactElement => {
  const {
    essentialSubjects,
    setEssentialSubjects,
    setStudentSubjects,
    numEssentialSubjects,
  } = useRestraintsContext();
  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    if (essentialSubjects.includes(title)) {
      setEssentialSubjects((previous: string[]) =>
        previous.filter((subject) => subject !== title)
      );
      setStudentSubjects((previous: string[]) => [...previous, title].sort());
    } else if (essentialSubjects.length < numEssentialSubjects) {
      setEssentialSubjects((previous: string[]) => [...previous, title].sort());
      setStudentSubjects((previous: string[]) =>
        previous.filter((subject) => subject !== title)
      );
    }
  }, [essentialSubjects, setEssentialSubjects, setStudentSubjects, title]);

  return (
    <Wrapper
      title={title}
      onClick={onClick}
      variant={variant as keyof typeof colors}
      blocked={
        essentialSubjects.length === numEssentialSubjects &&
        !essentialSubjects.includes(title)
          ? "T"
          : "F"
      }
    >
      {displayedTitle}
      {essentialSubjects.includes(title) ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
