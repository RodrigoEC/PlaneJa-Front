import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRestraintsContext } from "../../contexts/restraints";
import { Record } from "../../util/interfaces";
import { capitalize } from "../../util/util";
import { FileInput } from "../FileInput/FileInput";
import {
  Wrapper,
  Message,
  ClassesVersion,
  UploadContainer,
  QuestionIcon,
  Send,
} from "./UploadSection.style";
import { useModalContext } from "../../contexts/modal";
import { useRecordExtractionContext } from "../../contexts/recordExtraction";

export const UploadSection = (): ReactElement => {
  const {
    file,
    loading,
    extractData,
    error,
    semester: studentSemester,
  } = useRecordExtractionContext();
  const { semester } = studentSemester;
  const { handleChangeContent } = useModalContext();
  const [fileName, setFileName] = useState("");

  const submitData = async () => {
    const record: Record = await extractData(file);
    // const subjectObj = subjects.reduce((object: any, subject: string) => {
    //   object[subject] = 0;
    //   return object;
    // }, {});

    // record?.subjects?.forEach(
    //   (subject) => (subjectObj[capitalize(subject.name)] = 1)
    // );

    // let filteredSubjects: string[] = [];
    // Object.keys(subjectObj).forEach((subject: string) => {
    //   if (subjectObj[subject] !== 1)
    //     filteredSubjects = [...filteredSubjects, subject];
    // });

    // localStorage.setItem(
    //   "planeja@student_subjects",
    //   JSON.stringify(filteredSubjects)
    // );
    // setStudentSubjects(filteredSubjects);
  };

  useEffect(() => {
    if (file?.name.length < 20) {
      setFileName(file?.name);
    } else {
      setFileName(file?.name.slice(0, 12) + "..." + file?.name.slice(-10));
    }
  }, [file]);

  return (
    <>
      <Wrapper>
        <ClassesVersion>Turmas Ofertadas {semester || "--"}</ClassesVersion>
        <UploadContainer>
          <QuestionIcon onClick={() => handleChangeContent("question")} />
          <FileInput />
          <Send disabled={loading || !file || error.error} onClick={submitData}>
            Enviar
          </Send>
        </UploadContainer>
        {file?.name && (
          <Message error={error.error} title={`Arquivo: ${file?.name}`}>
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
    </>
  );
};
