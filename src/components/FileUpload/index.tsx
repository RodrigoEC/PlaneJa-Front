import { ReactElement, useCallback, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { FileInput } from "../FileInput";
import { QuestionModal } from "../QuestionModal";
import {
  Wrapper,
  FileName,
  ClassesVersion,
  UploadContainer,
  QuestionIcon,
  Send,
} from "./styles";

export const FileUpload = (): ReactElement => {
  const { file, loading, extractData, setLoading } = useExtractionContext();
  const [fileName, setFileName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const submitData = async () => {
    setLoading(true);
    await extractData(file);

    const interval = setInterval(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1500);
  };

  useEffect(() => {
    if (file?.name.length < 20) {
      setFileName(file?.name);
    } else {
      setFileName(file?.name.slice(0, 12) + "..." + file?.name.slice(-10));
    }
  }, [file]);

  const handleKeyPress = useCallback((event: any) => {
    if (event.key === "Escape" || event.key.toLowerCase() === "f") {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      <Wrapper>
        <ClassesVersion>
          Turmas Ofertadas {'2022.1' || "--"}
        </ClassesVersion>
        <UploadContainer>
          <QuestionIcon onClick={() => setModalOpen(true)} />
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
      {modalOpen && <QuestionModal onClose={() => setModalOpen(false)} />}
    </>
  );
};
