import { ReactElement, useEffect, useState } from "react";
import { Button, Filter, Input, Wrapper } from "./SubjectsInput.style";
import { Subject } from "../../contexts/weeklySchedule.interfaces";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { removeWordAccent } from "../../util/util";

export const SubjectsInput = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}): ReactElement => {
  const { filteredSubjects, setSearchedSubject } = useSubjectsTableContext();
  const [currentInput, setCurrentInput] = useState("");
  const [invalidData, setInvalidData] = useState(false);

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      const newSearchedSubjects = filteredSubjects.filter((subject: Subject) =>
        removeWordAccent(subject.name)
          .toUpperCase()
          .includes(removeWordAccent(currentInput.toUpperCase()))
      );

      setSearchedSubject(newSearchedSubjects);

      if (newSearchedSubjects.length === 0 && currentInput !== "") {
        setInvalidData(true);
      } else setInvalidData(false);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput, filteredSubjects]);

  return (
    <Wrapper
      onClick={() => setCurrentInput("")}
      className={invalidData ? "invalid" : ""}
    >
      <Filter />
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
