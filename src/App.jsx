import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import { Box } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./app.scss";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Topbar/>
      <div className="sections">
        <Box sx={{ flexGrow: 1 }}>
          <Aboutme/>
          <Contact/>
          <Projects/> 
        </Box>
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
