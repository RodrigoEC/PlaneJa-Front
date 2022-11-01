import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import { GlobalStyle, InnerContainer, Wrapper } from "./globalStyles";
import { Header } from "./components/Header";

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
          </InnerContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
