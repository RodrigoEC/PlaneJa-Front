import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./util/themes";
import { GlobalStyle, InnerContainer, Wrapper } from "./globalStyles";
import { Header } from "./components/Header";

function App() {
  const [theme, setTheme] = useState(light);

  const swapTheme = () => {
    if (light === theme) setTheme(dark);
    else setTheme(light);
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
