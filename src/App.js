import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
// import {Footer} from './components/Footer';
import {Main} from './components/Main.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans", sans-serif'
    }

});



class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <Header />
            <Main />
            {/*<Footer />*/}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
