import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Login from "./component/User/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PopularItem from "./component/PopularItem";
import Slider from './component/Slider/Slider';

function App() {
  return (
    <>
      <BrowserRouter>    
        <div className="App">
          <Header />
          <Category />
 
          <PopularItem/>
          <Slider />
          <Main />
      
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

