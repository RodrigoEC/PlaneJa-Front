import { ReactElement } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Select } from "./styles";

export const SelectClasses = (): ReactElement => {
  const { setEssentialSubjects, subjects } = useRestraintsContext();

  const addClass = (e: any) => {
    const newClass = e.target.value;
    console.log(newClass);

    setEssentialSubjects((previous: string[]) => {
      console.log(previous)
      if (previous.includes(newClass)) {
        return previous;
      }
      return [...previous, e.target.value];
    });
  };

  return (
    <Select value="volvo" name="cars" id="cars" onChange={addClass}>
      <option hidden value="volvo">
        Disciplinas fixas
      </option>
      {subjects.map((subject, i) => (
        <option key={i} value={subject.name}>{subject.name}</option>
      ))}
    </Select>
  );
};
