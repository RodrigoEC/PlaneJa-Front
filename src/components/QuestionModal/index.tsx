import { MouseEventHandler, ReactElement } from "react";
import academicControl from "../../assets/images/controle.png";
import { Wrapper, Background, Text, Title, Link, Close } from "./styles";

export const QuestionModal = ({ onClose }: { onClose: MouseEventHandler }): ReactElement => {
  return (
    <Background onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Title>Onde pego meu histórico?</Title>
        <article>
          <Text>
            Você pode pegar seu histórico no site do controle acadêmico da UFCG
            no link:{" "}
          </Text>
          <Link
            href="https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoDisciplinasOfertadas"
            target="_blank"
            rel="noreferrer"
          >
            Link do controle acadêmico
          </Link>
        </article>
        <img
          src={academicControl}
          alt="Print do controle acadêmico com seta vermelha apontando para botão escrito 'historico' e circulo vermelho mostrando botão para baixar histórico do aluno"
        />
        <Close onClick={onClose}><strong>F</strong>echar</Close>
      </Wrapper>
    </Background>
  );
};
