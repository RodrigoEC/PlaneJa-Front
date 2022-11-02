import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  transition: 0.3s;
  gap: 5rem;

  @media screen and (max-width: 700px) {
    gap: 3rem;
  }
`;
