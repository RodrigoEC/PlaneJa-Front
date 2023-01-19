import { ReactElement, useState } from "react";
import { LockedIcon, UnlockedIcon, Wrapper } from "./SubjectCard.styles";

export const SubjectCard = ({
  colors,
  title,
  locked,
}: {
  colors: { background: string; border: string };
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
    <Wrapper onClick={onClick} colors={colors}>
      {displayedTitle}
      {isLocked ? <LockedIcon /> : <UnlockedIcon />}
    </Wrapper>
  );
};
