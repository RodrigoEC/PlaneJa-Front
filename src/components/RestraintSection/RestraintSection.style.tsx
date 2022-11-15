import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

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

export const SubjectsContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 0.5rem 1rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;

  @media screen and (max-width: 500px) {
    overflow-x: scroll;
    justify-content: start;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      margin-top: 1rem;
      background-color: transparent;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary}80;
      opacity: 0.6;
      border-radius: 8px;
    }
  }
`;
