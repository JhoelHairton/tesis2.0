import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './Page/Nabar/Navbar';
import Home from './Page/Home/Home';
import Auth from './Auth/Auth';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
   
     {/*<Navbar/>*/}
     {/* <Home/>*/}

     <Auth/>
  </ThemeProvider>
  );
}

export default App;
