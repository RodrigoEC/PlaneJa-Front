import { ReactElement, useCallback, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { FileInput } from "../FileInput";
import { QuestionModal } from "../QuestionModal";
import {
  Wrapper,
  Message,
  ClassesVersion,
  UploadContainer,
  QuestionIcon,
  Send,
} from "./styles";

export const FileUpload = (): ReactElement => {
  const { file, loading, extractData, setLoading, error } =
    useExtractionContext();

  const { semester } = useRestraintsContext();
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
        <ClassesVersion>Turmas Ofertadas {semester || "--"}</ClassesVersion>
        <UploadContainer>
          <QuestionIcon onClick={() => setModalOpen(true)} />
          <FileInput />
          <Send disabled={loading || !file || error} onClick={submitData}>
            Enviar
          </Send>
        </UploadContainer>
        {file?.name && (
          <Message error={error} title={`Arquivo: ${file?.name}`}>
            {error ? (
              <>Não foi possível extrair dados do arquivo submetido</>
            ) : (
              <>
                Arquivo <i>{fileName}</i> carregado
              </>
            )}
          </Message>
        )}
      </Wrapper>
      {modalOpen && <QuestionModal onClose={() => setModalOpen(false)} />}
    </>
  );
};
