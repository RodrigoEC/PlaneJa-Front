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
  "Obrigatória": {
    title: "Obrigatórias cursadas",
    children: <DefaultSubjectContent type="Obrigatória" />,
  },
  "Optativa": {
    title: "Optativas cursadas",
    children: <DefaultSubjectContent type="Optativa" />,
  },
  "Complementar": {
    title: "Complementares cursadas",
    children: <DefaultSubjectContent type="Complementar" />,
  },
};
