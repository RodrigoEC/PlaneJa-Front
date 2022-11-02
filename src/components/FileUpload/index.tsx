import { ReactElement, useEffect } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { FileInput } from "../FileInput";
import { Wrapper, FileName, ClassesVersion } from "./styles";

export const FileUpload = (): ReactElement => {
  const { file, classesSemester } = useExtractionContext();

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <Wrapper>
      <ClassesVersion>
        Disciplinas ofertadas: {classesSemester || "--"}
      </ClassesVersion>
      <FileInput />
      {file?.name && (
        <FileName>
          {file.name.length < 35
            ? file.name
            : file.name.slice(0, 15) + "..." + file.name.slice(-10)}
        </FileName>
      )}
    </Wrapper>
  );
};
