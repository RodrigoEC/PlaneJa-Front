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
import { useStudentDataContext } from "../../contexts/studentData";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { handleLocalStorageStateUpdate } from "../../util/util";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";

export const UploadSection = (): ReactElement => {
  const { file, extractionLoading, extractData, error } =
    useExtractionContext();
  const { semester, fillStudentData } = useStudentDataContext();
  const { setAvailableSubjects } = useRestraintsContext();
  const { setSchedules } = useSubjectsTableContext();
  const { handleChangeContent } = useModalContext();
  const [fileName, setFileName] = useState("");

  const submitData = async () => {
    const extractedData = await extractData(file);
    const { record, enrollment_info } = extractedData[0];

    if (extractedData[1] === 206) {
      console.log(extractedData)
      handleChangeContent(extractedData[1].toString())
    }

    handleLocalStorageStateUpdate(
      "planeja@schedules",
      setSchedules,
      enrollment_info.enrollments
    );

    handleLocalStorageStateUpdate(
      "planeja@available_subjects",
      setAvailableSubjects,
      enrollment_info.subjects_available
    );

    fillStudentData(
      record,
      enrollment_info.semester,
      enrollment_info.enrollments
    );
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
          <Send disabled={extractionLoading || !file || error.warn} onClick={submitData}>
            Enviar
          </Send>
        </UploadContainer>
        {file?.name && (
          <Message error={error.warn} title={`Arquivo: ${file?.name}`}>
            {error.warn ? (
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
