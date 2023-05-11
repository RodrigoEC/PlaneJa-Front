import { ReactElement, useEffect, useState } from "react";
import { Credits, Head, SubjectContent, SubjectCredits, SubjectElement, Title, Wrapper } from "./DefaultSubjectContent.style";
import { useStudentDataContext } from "../../../../contexts/studentData";
import { SubjectRecord } from "../../../../contexts/studentData.interfaces";
import { capitalize } from "../../../../util/util";
import { useModalContext } from "../../../../contexts/modal";

export const DefaultSubjectContent = ({ type }: { type: string }): ReactElement => {
  const { studentRecord } = useStudentDataContext()
  const { contentKey } = useModalContext()
  const [subjects, setSubject] = useState<SubjectRecord[]>([])

  useEffect(() => {
    setSubject(studentRecord.subjects.filter(
      (subject: SubjectRecord) => subject.type === type))
  }, [studentRecord, contentKey, type])

  return (
    <Wrapper>
      <Head>
        <Title>Disciplinas</Title>
        <Credits>{subjects.reduce((total: number, subject: SubjectRecord) => total + subject.credits, 0)} Créditos</Credits>
      </Head>
      {subjects.map((subject: SubjectRecord) => (
        <SubjectElement key={subject.id}>
          <SubjectContent title={subject.name}>{capitalize(subject.name)}</SubjectContent>
          <SubjectCredits>{subject.credits}</SubjectCredits>
        </SubjectElement>))}

    </Wrapper>
  );
};
