import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.scss';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import {FullMovie} from './pages/FullMovie/FullMovie';
import { Container } from '@mui/material';
import { Footer } from './components/Footer/Footer';

 export const ColorModeContext = React.createContext();
const App = () => {
   const [darkMode, setDarkMode] = useState(false);
   const [selectedCard, setSelectedCard] = useState('');
    

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
 

  return (
           
          <div className={`App ${darkMode ? 'App_dark' : ''}`}>
      <ColorModeContext.Provider value={{ darkMode, setDarkMode }}>
        <CssBaseline />
        <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Header/>
          <Routes>
           <Route path='/' exact element={<Home setSelectedCard={setSelectedCard}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path={`/movie/${selectedCard}`} element={<FullMovie id={selectedCard}/>}/>
            </Routes>
            <Footer/>
        </ThemeProvider>
        </Container>
      </ColorModeContext.Provider>
        </div>

  )
}

export default App;
