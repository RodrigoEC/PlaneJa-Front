import { ReactElement } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Select } from "./styles";

export const SelectClasses = (): ReactElement => {
  const { setEssentialSubjects, subjects } = useRestraintsContext();

  const addClass = (e: any) => {
    const newClass = e.target.value;

    setEssentialSubjects((previous: string[]) => {
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
      {subjects.map((subject: string, i: number) => (
        <option key={i} value={subject}>
          {subject}
        </option>
      ))}
    </Select>
  );
};
