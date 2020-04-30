import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./hooks/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header/Header";

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const handleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header handleTheme={handleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
