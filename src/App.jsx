import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import { Box } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./app.scss";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Projects/>
        <Contact/>
        
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

{/* <Contact/>
<Projects/>  */}