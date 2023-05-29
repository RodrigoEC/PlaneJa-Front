import { Delete, Text, Wrapper } from "./FixedSubject.style";

export const FixedSubject = ({ title }: { title: string }) => {
  const titleText =
    title?.length > 20 ? title.slice(0, 10) + "..." + title.slice(-10) : title;

  const removeSubject = () => {
    const [name, num] = title.split(" - T");

    
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
