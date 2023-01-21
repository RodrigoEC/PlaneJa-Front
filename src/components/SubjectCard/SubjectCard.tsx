import { ReactElement, useState } from "react";
import { colors } from "../../util/colors";
import { LockedIcon, UnlockedIcon, Wrapper } from "./SubjectCard.styles";

export const SubjectCard = ({
  variant,
  title,
  locked,
}: {
  variant: string;
  title: string;
  locked: boolean;
}): ReactElement => {
  const [isLocked, setIsLocked] = useState(locked);
  const displayedTitle =
    title.length > 30 ? title.slice(0, 25) + "..." + title.slice(-4) : title;

  // TODO: Add update formdata on unlock or lock feature
  const onClick = (): void => {
    setIsLocked((previous) => !previous);
  };

  return (
    <Wrapper onClick={onClick} variant={variant as keyof typeof colors}>
      {displayedTitle}
      {isLocked ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
