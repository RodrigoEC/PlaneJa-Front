import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './util/themes';
import { GlobalStyle, Wrapper } from './globalStyles';
import { Header } from './components/Header';

function App() {
  const [theme, setTheme] = useState(light)

  const swapTheme = () => {
    if (light === theme) setTheme(dark)
    else setTheme(light)
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header themeHandler={swapTheme} />

        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
