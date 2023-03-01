import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import { UploadSection } from "./components/UploadSection/UploadSection";
import { Footer } from "./components/Footer/Footer";
import { RestraintSection } from "./components/RestraintSection/RestraintSection";
import { useExtractionContext } from "./contexts/extraction";
import { Loading, SubjectData } from "./components/SubjectData/SubjectData";
import {
  GlobalStyle,
  InnerContainer,
  Wrapper,
  Title,
  Body,
  Divider,
  SubjectsDataSection,
  ScheduleContainer,
} from "./globalStyles";
import { ScheduleTable } from "./components/ScheduleTable/ScheduleTable";
import { Dots } from "./assets/icons/Dots";
import { ScheduleMenu } from "./components/ScheduleMenu/ScheduleMenu";

function App() {
  const { studentRecord, loading } = useExtractionContext();
  const { status, course } = studentRecord;
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
              {loading ? (
                <Title disabled={true.toString()}>
                  <Loading />
                </Title>
              ) : (
                <Title disabled={course}>{course || "planejá-UFCG"}</Title>
              )}
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
              <ScheduleContainer>
                <RestraintSection />
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
