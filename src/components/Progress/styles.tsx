import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.third};
  border-radius: 50px;
  height: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    height: 1.25rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bolder;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const InnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 0.5rem;
  min-width: 1rem;
  width: ${({ progress }: { progress: number }) => progress}%;

  @media screen and (max-width: 700px) {
    min-width: 0.75rem;
  }
`;

export const ProgressValue = styled.span`
  color: ${({ theme }) => theme.colors.contrast};
  font-weight: bolder;
  font-size: 0.75rem;
`;
