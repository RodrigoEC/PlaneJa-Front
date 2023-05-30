import { ReactElement, useEffect, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Button, Filter, Input, Wrapper } from "./SubjectsInput.style";
import { Subject } from "../../contexts/restraints.interfaces";

export const SubjectsInput = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}): ReactElement => {
  const {
    availableSubjects,
    setAvailableSubjects,
    setFilteredSubjects,
  } = useRestraintsContext();
  const [currentInput, setCurrentInput] = useState("");
  const [invalidData, setInvalidData] = useState(false);

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      const newAvailableSubjects = availableSubjects.filter(
        (subject: Subject) => subject.name.includes(currentInput.toUpperCase())
      );

      setFilteredSubjects(newAvailableSubjects);

      if (newAvailableSubjects.length === 0 && currentInput !== "") {
        setInvalidData(true);
      } else setInvalidData(false);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput, setAvailableSubjects]);

  return (
    <Wrapper
      onClick={() => setCurrentInput("")}
      className={invalidData ? "invalid" : ""}
    >
      <Button>
        <Filter />
      </Button>
      <Input
        placeholder="Pesquisar disciplinas"
        onFocus={(e) => (e.target.value = "")}
        value={currentInput}
        onChange={(event) => {
          setCurrentInput(event.target.value);
        }}
      />
    </Wrapper>
  );
};
