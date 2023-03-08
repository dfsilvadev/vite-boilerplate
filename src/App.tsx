import { ThemeProvider } from "styled-components";

import Checkbox from "./components/Checkbox";

import { DefaultTheme, GlobalStyles } from "./styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <h1>Boilerplate</h1>
      <Checkbox label="Checkbox" labelFor="Checkbox" />
    </ThemeProvider>
  );
}

export default App;
