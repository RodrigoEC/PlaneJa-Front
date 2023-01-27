import { ReactElement, useCallback, useEffect } from "react";
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
  } = useRestraintsContext();
  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    if (essentialSubjects.includes(title)) {
      setEssentialSubjects((previous: string[]) =>
        previous.filter((subject) => subject !== title)
      );
      setStudentSubjects((previous: string[]) => [...previous, title].sort());
    } else {
      setEssentialSubjects((previous: string[]) => [...previous, title]);
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
    >
      {displayedTitle}
      {essentialSubjects.includes(title) ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
