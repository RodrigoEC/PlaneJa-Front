import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import { Header } from "./components/Header";
import { Progress } from "./components/Progress";
import { Status } from "./components/Status";
import { FileUpload } from "./components/FileUpload";
import { Footer } from "./components/Footer";
import { Settings } from "./components/Settings";
import { useRestraintsContext } from "./contexts/restraints";
import { Subject } from "./components/Subject/Subject";
import {
  GlobalStyle,
  InnerContainer,
  Wrapper,
  Title,
  Body,
  Divider,
  SettingsContainer,
  SubjectsContainer,
} from "./globalStyles";

function App() {
  const { essentialSubjects } = useRestraintsContext();
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
              <SettingsContainer>
                <Settings />
                <SubjectsContainer>
                  {essentialSubjects.map((subject: string) => (
                    <Subject key={subject} title={subject} />
                  ))}
                </SubjectsContainer>
              </SettingsContainer>
            </Body>
            <Footer></Footer>
          </InnerContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
