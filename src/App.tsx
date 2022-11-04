import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import {
  GlobalStyle,
  InnerContainer,
  Wrapper,
  Title,
  Body,
  Divider,
} from "./globalStyles";
import { Header } from "./components/Header";
import { Progress } from "./components/Progress";
import { Status } from "./components/Status";
import { FileUpload } from "./components/FileUpload";
import { QuestionModal } from "./components/QuestionModal";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("planeja@theme")
      ? JSON.parse(localStorage.getItem("planeja@theme") || "{}")
      : light
  );

  const swapTheme = () => {
    let newTheme = theme === light ? dark : light;

    setTheme(newTheme);
    localStorage.setItem("planeja@theme", JSON.stringify(newTheme));
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <InnerContainer>
            <Header themeHandler={swapTheme} />
            <Body>
              <Title>Ciência da computação</Title>
              <Progress />
              <Status />
              <Divider />
              <FileUpload />
              <Divider />
            </Body>
          </InnerContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
