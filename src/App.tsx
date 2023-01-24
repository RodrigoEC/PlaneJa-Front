import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import { UploadSection } from "./components/UploadSection/UploadSection";
import { Footer } from "./components/Footer/Footer";
import { RestraintSection } from "./components/RestraintSection/RestraintSection";
import { useExtractionContext } from "./contexts/extraction";
import { SubjectData } from "./components/SubjectData/SubjectData";
import {
  GlobalStyle,
  InnerContainer,
  Wrapper,
  Title,
  Body,
  Divider,
  SettingsContainer,
  SubjectsDataSection,
  ScheduleContainer,
} from "./globalStyles";
import { ScheduleTable } from "./components/ScheduleTable/ScheduleTable";
import { Dots } from "./assets/icons/Dots";
import { ScheduleMenu } from "./components/ScheduleMenu/ScheduleMenu";

function App() {
  const { studentRecord } = useExtractionContext();
  const { status } = studentRecord;
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
              <SubjectsDataSection>
                <SubjectData title="Obrigatórias" status={status.mandatory} />
                <SubjectData title="Optativas" status={status.optative} />
                <SubjectData
                  title="Complementares"
                  status={status.complementary}
                />
              </SubjectsDataSection>
              <Divider />
              <UploadSection />
              <Divider />
              <SettingsContainer>
                <RestraintSection />
              </SettingsContainer>
              <ScheduleContainer>
                <ScheduleTable />
                <Dots />
                <ScheduleMenu />
              </ScheduleContainer>
            </Body>
            <Footer></Footer>
          </InnerContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
