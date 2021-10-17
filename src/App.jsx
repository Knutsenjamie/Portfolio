import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
        <div className="sections">
        <Topbar/>
        <ol>
          <ul><Aboutme/></ul>
          <ul><Contact/></ul>
          <ul><Projects/></ul> 
        </ol>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
