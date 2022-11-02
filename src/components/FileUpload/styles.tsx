import styled from "styled-components";
import { QuestionIcon as Question } from "../../assets/icons/Question";

export const Wrapper = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  box-sizing: border-box;
`;

export const ClassesVersion = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 0.85rem;
`;

export const FileName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 0.75rem;
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const QuestionIcon = styled(Question)`
  fill: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`
