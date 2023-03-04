import { ReactElement } from "react";
import academicControl from "../../assets/images/controle.png";
import { Text, Link } from "./QuestionContent.style";

export const QuestionContent = (): ReactElement => {
  return (
    <>
      <article>
        <Text>
          Você pode pegar seu histórico no site do controle acadêmico da UFCG no
          link:
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
    </>
  );
};
