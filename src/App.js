import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./Component/Content"
import Content2 from "./Component/Content2"
import Content3 from "./Component/Content3"
import Header from "./Header/Header"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
       {/* <Content></Content>  */}
       {/* <Content2></Content2>  */}
       <Content3></Content3> 
      </header>
    </div>
  );
}

export default App;
