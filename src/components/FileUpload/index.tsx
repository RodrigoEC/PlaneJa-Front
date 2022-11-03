import { ReactElement, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { FileInput } from "../FileInput";
import {
  Wrapper,
  FileName,
  ClassesVersion,
  UploadContainer,
  QuestionIcon,
  Send,
} from "./styles";

export const FileUpload = (): ReactElement => {
  const { file, classesSemester } = useExtractionContext();
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!file) {
      setDisabled(true);
    } else {
      if (file.name.length < 20) {
        setFileName(file.name);
      } else {
        setFileName(file.name.slice(0, 12) + "..." + file.name.slice(-10));
      }

      setDisabled(false);
    }
  }, [file]);

  return (
    <Wrapper>
      <ClassesVersion>
        Disciplinas Ofertadas: {classesSemester || "--"}
      </ClassesVersion>
      <UploadContainer>
        <QuestionIcon />
        <FileInput />
        <Send disabled={disabled}>Enviar</Send>
      </UploadContainer>
      {file?.name && <FileName title={file?.name}>Arquivo <i>{fileName}</i> Carregado</FileName>}
    </Wrapper>
  );
};
