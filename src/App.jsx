import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
