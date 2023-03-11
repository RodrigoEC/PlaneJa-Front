import { RecommendingErrorContent } from "../components/ModalContent/Error/RecommendingErrorContent";
import { QuestionContent } from "../components/ModalContent/Question/QuestionContent";

export const contentMap = {
  question: {
    title: "Onde eu pego meu histórico?",
    children: <QuestionContent />,
  },
  "206": {
    title: "Erro ao fazer a recomendação de matrículas",
    children: <RecommendingErrorContent />,
  },
};
