import { ReactElement, useCallback } from "react";
import { useRecordExtractionContext } from "../../contexts/recordExtraction";
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
  const { availableSubjects, setAvailableSubjects } = useRecordExtractionContext()
  const {
    numEssentialSubjects,
  } = useRestraintsContext();
  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-3) : title;

  const onClick = useCallback((): void => {
    if (availableSubjects.includes(title)) {
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
        !availableSubjects.includes(title)
          ? "T"
          : "F"
      }
    >
      {displayedTitle}
      {availableSubjects.includes(title) ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
