import styled, { DefaultTheme } from "styled-components";
import { QuestionIcon as Question } from "../../assets/icons/Question";

export const Wrapper = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  box-sizing: border-box;
`;

export const ClassesVersion = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 0.85rem;
`;

export const Message = styled.span`
  color: ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
    error ? theme.colors.alert : theme.colors.secondary};
  font-weight: bold;
  font-size: 0.75rem;
  text-align: center;

  i {
    font-style: italic;
    opacity: 0.9;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const QuestionIcon = styled(Question)`
  fill: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Send = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.contrast};
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.8rem 1rem;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 700px) {
    padding: 0.65rem 0.8rem;
  }
`;
