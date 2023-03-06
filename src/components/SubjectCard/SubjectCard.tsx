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
  const { numEssentialSubjects, availableSubjects, setAvailableSubjects } =
    useRestraintsContext();
  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    if (availableSubjects.filter((subject) => title === subject.name)) {
      setAvailableSubjects((previous: string[]) =>
        previous.filter((subject) => subject !== title)
      );
    } else if (availableSubjects.length < numEssentialSubjects) {
      setAvailableSubjects((previous: string[]) => [...previous, title].sort());
    }
  }, [availableSubjects, setAvailableSubjects, title]);

  return (
    <Wrapper
      title={title}
      onClick={onClick}
      variant={variant as keyof typeof colors}
      blocked={
        availableSubjects.length === numEssentialSubjects &&
        !availableSubjects.filter((subject) => title === subject.name)
          ? "T"
          : "F"
      }
    >
      {displayedTitle}
      {availableSubjects.filter((subject) => title === subject.name) ? (
        <LockedIcon />
      ) : (
        <UnlockedIcon />
      )}
    </Wrapper>
  );
};
