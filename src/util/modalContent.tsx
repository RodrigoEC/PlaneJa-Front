import { RecommendingErrorContent } from "../components/ModalContent/Error/RecommendingErrorContent";
import { QuestionContent } from "../components/ModalContent/Question/QuestionContent";
import { DefaultSubjectContent } from "../components/ModalContent/SubjectsData/Question copy/DefaultSubjectContent";

export const contentMap = {
  question: {
    title: "Onde eu pego meu histórico?",
    children: <QuestionContent />,
  },
  "206": {
    title: "Erro ao fazer a recomendação de matrículas",
    children: <RecommendingErrorContent />,
  },
  mandatory: {
    title: "Cadeira obrigatórias cursadas",
    children: <DefaultSubjectContent type="Obrigatória" />,
  },
  optional: {
    title: "Cadeira optativas cursadas",
    children: <DefaultSubjectContent type="Optativa" />,
  },
  complementary: {
    title: "Cadeira complementares cursadas",
    children: <DefaultSubjectContent type="Complementar" />,
  },
};
