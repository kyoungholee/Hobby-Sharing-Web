import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Login from "./component/User/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>    
        <div className="App">
          <Header />
          <Category />

          <Switch>
      
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

