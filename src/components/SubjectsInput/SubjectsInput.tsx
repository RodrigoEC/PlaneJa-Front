import { ReactElement, useEffect, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Button, Filter, Input, Wrapper } from "./SubjectsInput.style";
import { Subject } from "../../contexts/restraints.interfaces";

export const SubjectsInput = (): ReactElement => {
  const { availableSubjects, setAvailableSubjects, filteredSubjects, setFilteredSubjects } = useRestraintsContext();
  const [currentInput, setCurrentInput] = useState("");
  const [invalidData, setInvalidData] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      const newAvailableSubjects = availableSubjects.filter(
        (subject: Subject) => subject.name.includes(currentInput.toUpperCase())
      );
      
      setFilteredSubjects(newAvailableSubjects);
      console.log(currentInput, newAvailableSubjects, filteredSubjects);
      
      if (newAvailableSubjects.length === 0 && currentInput !== "") {
        setInvalidData(true);
      } else setInvalidData(false);
    }, 300);

    return () => clearTimeout(delay);
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
