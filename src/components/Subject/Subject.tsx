import { useRestraintsContext } from "../../contexts/restraints";
import { Delete, Text, Wrapper } from "./Subject.style";

export const Subject = ({ title }: { title: string }) => {
  const { setEssentialSubjects } = useRestraintsContext();
  const titleText =
    title.length > 20 ? title.slice(0, 10) + "..." + title.slice(-10) : title;

  const removeSubject = () => {
    setEssentialSubjects((previous: string[]) =>
      previous.filter((subject: string) => {
        return subject !== title;
      })
    );
  };

  return (
    <Wrapper title={title} onClick={removeSubject}>
      <Text>{titleText}</Text>
      <Delete />
    </Wrapper>
  );
};
