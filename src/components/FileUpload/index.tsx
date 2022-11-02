import { ReactElement, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { FileInput } from "../FileInput";
import { Wrapper, FileName, ClassesVersion, UploadContainer, QuestionIcon } from "./styles";

export const FileUpload = (): ReactElement => {
  const { file, classesSemester } = useExtractionContext();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (!file) return;

    if (file.name.length < 35) {
      setFileName(file.name);
    } else {
      setFileName(file.name.slice(0, 12) + "..." + file.name.slice(-10));
    }
  }, [file]);

  return (
    <Wrapper>
      <ClassesVersion>
        Disciplinas ofertadas: {classesSemester || "--"}
      </ClassesVersion>
      <UploadContainer>
        <FileInput />
        <QuestionIcon />
      </UploadContainer>
      {file?.name && <FileName>{`${fileName} carregado`}</FileName>}
    </Wrapper>
  );
};
