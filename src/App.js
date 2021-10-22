import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Login from "./component/User/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PopularItem from "./component/PopularItem";


function App() {
  return (
    <>
      <BrowserRouter>    
        <div className="App">
          <Header />
          <Category />

          <Switch>
          <PopularItem/>
          <Route path = "/">
          <Main />
          </Route>
          </Switch>

          
          <Footer />
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

