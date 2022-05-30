import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>App</h1>
    </ThemeProvider>
  );
}
