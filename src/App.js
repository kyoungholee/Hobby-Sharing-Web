import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./component/Main";
import Footer from "./component/Footer";
import {BrowserRouter as  Router, Route,  Switch} from 'react-router-dom';
import PopularItem from "./component/PopularItem";
import Slider from './component/Slider/Slider';
import Sign from "./component/User/Sign";
import { CategoryData } from "./component/CategoryData";
import Login from "./component/User/Login";

function App() {
  return (
    <>
        <Router>
      
              <Header />
              <Switch>

                <Route exact path = "/" >
                  <Category />
                  <PopularItem/>
                  <Slider />
                  <Main />
                </Route>


                <Route path = "/Sign">
                  <Sign />
                </Route>
                <Route path = "/Login">
                <Login />
              </Route>

              </Switch>
              <Footer />
      
        </Router>
    </>
  );
}

export default App;

