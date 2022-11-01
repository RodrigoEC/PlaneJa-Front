import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.6rem;

  @media screen and (max-width: 1000px) {
    gap: 0.5rem;
  }
`;

// Title, Data, Atribute

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.1rem;

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Data = styled.span`
  font-weight: bold;
  font-size: 1.4rem;

  @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Atribute = styled.span`
  font-size: 0.85rem;
  opacity: 0.8;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.7rem;
  }
`;
