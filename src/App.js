import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Main} from './components/Main.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#3d5ba6',
      },
      secondary: {
        main: '#BAC4CC',
      },
    },
    typography: {
        fontFamily: '"TT-Norms-Pro", sans-serif'
    },
    components: {
        MuiFab: {
            styleOverrides: {
              circular: { backgroundColor: '#3d5ba6', color:'#ffffff',
                          ':hover': { backgroundColor: '#BAC4CC', color:'#3d5ba6'}
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
