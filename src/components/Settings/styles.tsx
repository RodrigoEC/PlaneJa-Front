import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 700px) {
    flex-flow: column-reverse;
    align-items: center;
  }
`;

export const InputArea = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`

export const Divider = styled.div`
  height: 1.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.primary}50;
`;


export const Submit = styled.input`
  justify-self: flex-end;
`;

export const EssentialContainer = styled.div`
  flex-grow: 1;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
