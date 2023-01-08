import { useState } from "react";
import { Wrapper } from "./SubjectCard.styles";

export const SubjectCard = ({
  color,
  title,
  locked,
}: {
  color: string;
  title: string;
  locked: boolean;
}) => {
  const [isLocked, setIsLocked] = useState(locked);
  

  return <Wrapper>{}</Wrapper>;
};
