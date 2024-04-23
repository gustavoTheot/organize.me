import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContainer } from "./AppStyle";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
          <Router />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
