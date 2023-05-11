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
    title: "Obrigatórias cursadas",
    children: <DefaultSubjectContent type="Obrigatória" />,
  },
  optional: {
    title: "Optativas cursadas",
    children: <DefaultSubjectContent type="Optativa" />,
  },
  complementary: {
    title: "Complementares cursadas",
    children: <DefaultSubjectContent type="Complementar" />,
  },
};
