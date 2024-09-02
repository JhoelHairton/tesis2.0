import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Home from './Page/Home/Home';
import Nav from './Page/Navbar/Nav';
import Auth from './Page/Auth/Auth';
import { getUserProfile } from './Redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from './Redux/TaskSlice';


function App() {
  const user = true;
  const dispatch = useDispatch();
  const { task,auth } = useSelector(store => store)

  useEffect(() => { 
    dispatch(fetchTasks()); 
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt"))); 
    
  }, [auth.jwt]);

  return (

    <ThemeProvider theme={darkTheme}>
      {auth.user? <div>
        <Nav />
        <Home />
      </div> :
        <Auth />}
        
    </ThemeProvider>

  );
}

export default App;
