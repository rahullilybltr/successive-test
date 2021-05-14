import React, { Fragment } from 'react';
import Header from './Components/Navigation';
import { createGlobalStyle } from 'styled-components';
import Routes from './Routes';
// import Routes from './Routes';  
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", "sans-serif";
    }

    body {
        font-family: "Roboto", "sans-serif";
        font-weight: 400;
        color: #000;
    }

    h1,h2,h3,h4 {
        font-weight: 400;
    }
    h3{
      font-size: 12px;
      color: rgb(74,74,74);
      font-weight: 600;
      margin-bottom: 15px;
    }
    input,img,button {
        outline: none;
        font-family: "Roboto", "sans-serif";
    }
`;

class App extends React.Component{
    render(){
      return (
        <Fragment>
          <GlobalStyle />
          <Header />
          <Routes />
          
        </Fragment>
      );
    }
}

export default App;