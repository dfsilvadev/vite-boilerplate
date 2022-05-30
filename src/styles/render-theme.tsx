import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

import { theme } from "./";

export default function (children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
