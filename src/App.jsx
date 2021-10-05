import Topbar from "./components/topbar/Topbar";
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
        <Topbar/>
        <ol>
          <ul>yooo im just a filler right now</ul>
          <ul><em>yooo im just a filler right now</em></ul>
          <ul><strong>yooo im just a filler right now</strong></ul>
        </ol>
      </div>
    </ThemeProvider>
  );
}

export default App;
