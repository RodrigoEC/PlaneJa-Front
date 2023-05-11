import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 18rem;
  overflow-y: scroll;
  padding: 0 0.75rem 0 0;

  &::-webkit-scrollbar {
    height: 8px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}80;
    opacity: 0.6;
    border-radius: 8px;
  }
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`

export const Title = styled.span`
  font-weight: bold;
`
export const Credits = styled.span``

export const SubjectElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  box-sizing: border-box;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}30;

`

export const SubjectContent = styled.span`
  font-weight: bold;
`
export const SubjectCredits = styled.span`
  margin-left: 1rem;
`