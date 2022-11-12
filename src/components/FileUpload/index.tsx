import { ReactElement, useCallback, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { Record } from "../../service/types";
import { capitalize } from "../../util/util";
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
  const { semester, subjects, setStudentSubjects } = useRestraintsContext();
  const [fileName, setFileName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const submitData = async () => {
    setLoading(true);
    const record: Record = await extractData(file);
    const subjectObj = subjects.reduce((object: any, subject: string) => {
      object[subject] = 0;
      return object;
    }, {});

    record?.classes.forEach(
      (subject) => (subjectObj[capitalize(subject.name)] = 1)
    );

    let filteredSubjects: string[] = [];
    Object.keys(subjectObj).forEach((subject: string) => {
      if (subjectObj[subject] !== 1)
        filteredSubjects = [...filteredSubjects, subject];
    });

    localStorage.setItem(
      "@planeja/student_subjects",
      JSON.stringify(filteredSubjects)
    );
    setStudentSubjects(filteredSubjects);
    setLoading(false);
  };

  useEffect(() => {
    if (file?.name.length < 20) {
      setFileName(file?.name);
    } else {
      setFileName(file?.name.slice(0, 12) + "..." + file?.name.slice(-10));
    }
  }, [file]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const keys = ["Escape", "f"];
    if (keys.includes(event.key)) {
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
