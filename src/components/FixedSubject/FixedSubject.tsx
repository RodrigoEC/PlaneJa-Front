import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { Delete, Text, Wrapper } from "./FixedSubject.style";

export const FixedSubject = ({ title }: { title: string }) => {
  const { setEssentialSubjects, essentialSubjects } = useRestraintsContext();
  const titleText =
    title?.length > 20 ? title.slice(0, 10) + "..." + title.slice(-10) : title;

  const removeSubject = () => {
    const [name, num] = title.split(" - T");

    setEssentialSubjects(
      essentialSubjects.filter(
        (subject: Subject) =>
          subject.name !== name.trim() || subject.class_num !== num.trim()
      )
    );
  };

  const handleMouseOver = () => {};

  return (
    <Wrapper
      title={title}
      onClick={removeSubject}
      onMouseOver={handleMouseOver}
    >
      <Text>{titleText}</Text>
      <Delete />
    </Wrapper>
  );
};
