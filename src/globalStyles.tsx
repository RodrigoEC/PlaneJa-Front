import styled, { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface colorPalette {
    primary: string;
    secondary: string;
    third: string;
    contrast: string;
    alert: string;
  }

  export interface DefaultTheme {
    name: string;
    colors: colorPalette;
  }
}

export const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Roboto Mono', monospace;
  }

  

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.contrast};

  
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  padding: 0 1rem;
`;

export const Body = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  gap: 2.5rem;
  flex-grow: 1;

  padding: 3rem 4rem 2rem;
  box-sizing: border-box;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 700px) {
    gap: 2rem;
    padding: 3rem 0rem 2rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bolder;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  line-height: 1.25;
  transition: 0.3s;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
`;

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  width: 4rem;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  width: 100%;
`

export const SubjectsDataSection = styled.section`
  display: flex;
  transition: 0.3s;
  gap: 5rem;

  @media screen and (max-width: 700px) {
    gap: 2rem;
  }
`