import { useRecordExtractionContext } from "../../contexts/recordExtraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { Delete, Text, Wrapper } from "./Subject.style";

export const Subject = ({ title } : { title: string }) => {
  const { setAvailableSubjects } = useRecordExtractionContext()
  const titleText =
    title.length > 20 ? title.slice(0, 10) + "..." + title.slice(-10) : title;

  const removeSubject = () => {
    setAvailableSubjects((previous: string[]) =>
      previous.filter((subject: string) => {
        return subject !== title;
      })
    );
  };

  const handleMouseOver = () => {

  }

  return (
    <Wrapper title={title} onClick={removeSubject} onMouseOver={handleMouseOver}>
      <Text>{titleText}</Text>
      <Delete />
    </Wrapper>
  );
};
