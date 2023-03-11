import { ReactElement } from "react";
import crying from "../../../assets/images/crying.gif";
import { Wrapper, Text } from "./RecommendingErrorContent.style";

export const RecommendingErrorContent = (): ReactElement => {
  return (
    <Wrapper>
      <Text>
        Não foi possível fazer a recomendação de matrículas para alunos do seu
        curso por falta de dados relacionados.
      </Text>
      <img
        src={crying}
        alt="Print do controle acadêmico com seta vermelha apontando para botão escrito 'historico' e circulo vermelho mostrando botão para baixar histórico do aluno"
      />
      <Text>Olhando pelo lado positivo, fizemos a extração dos dados do seu histórico. :)</Text>
    </Wrapper>
  );
};
