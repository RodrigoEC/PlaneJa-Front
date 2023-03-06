import { ReactElement, useEffect, useState } from "react";
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
import { StudentRecord } from "../../contexts/studentData.interfaces";
import { useStudentDataContext } from "../../contexts/studentData";
import { useExtractionContext } from "../../contexts/extraction";

export const UploadSection = (): ReactElement => {
  const { file, loading, extractData, error } = useExtractionContext();
  const { semester, fillStudentData } = useStudentDataContext();
  const { handleChangeContent } = useModalContext();
  const [fileName, setFileName] = useState("");

  const submitData = async () => {
    const extractedData = await extractData(file);
    const { record, enrollment_info } = extractedData;
    console.log(extractedData)
    fillStudentData(
      record,
      enrollment_info.semester,
      enrollment_info.enrollments
    );

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
          <Send disabled={loading || !file || error.warn} onClick={submitData}>
            Enviar
          </Send>
        </UploadContainer>
        {file?.name && (
          <Message error={error.warn} title={`Arquivo: ${file?.name}`}>
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
