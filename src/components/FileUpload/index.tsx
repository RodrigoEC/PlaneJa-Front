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
  const { file, classesSemester, loading, setLoading } = useExtractionContext();
  const [fileName, setFileName] = useState("");

  const submitData = async () => {
    setLoading(true);

    const interval = setInterval(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);
  };

  useEffect(() => {
    if (file?.name.length < 20) {
      setFileName(file?.name);
    } else {
      setFileName(file?.name.slice(0, 12) + "..." + file?.name.slice(-10));
    }
  }, [file]);

  return (
    <Wrapper>
      <ClassesVersion>
        Turmas Ofertadas {classesSemester || "--"}
      </ClassesVersion>
      <UploadContainer>
        <QuestionIcon />
        <FileInput />
        <Send disabled={loading || !file} onClick={submitData}>
          Enviar
        </Send>
      </UploadContainer>
      {file?.name && (
        <FileName title={file?.name}>
          Arquivo <i>{fileName}</i> carregado
        </FileName>
      )}
    </Wrapper>
  );
};
