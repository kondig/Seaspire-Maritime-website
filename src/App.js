import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Main} from './components/Main.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1864ac',
      },
      secondary: {
        main: '#BAC4CC',
      },
    },
    typography: {
        fontFamily: '"Raleway", sans-serif'
    },
    components: {
        MuiFab: {
            styleOverrides: {
              circular: { backgroundColor: '#1864ac', color:'#ffffff',
                          ':hover': { backgroundColor: '#BAC4CC', color:'#1864ac'}
                        },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: { minHeight: '35px' },
                content: { margin: '10px 0'},
            }
        }
    },

});



class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <Header />
            <Main />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
