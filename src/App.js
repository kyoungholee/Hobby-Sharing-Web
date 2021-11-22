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
import Home from "./component/Home";
import ItemList2 from "./component/ItemList2";
import DetailPage from "./component/DetailPage";
import WnOutSideList from "./Pages/WnOutSideList";
import WnList from "./Pages/WnList";
import SmOutSideList from "./Pages/SmOutSideList";
import SmList from "./Pages/SmList";

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
                  <SmOutSideList />
                  <WnOutSideList />
               
                </Route>
                
                <Route path = "/winter/:id"> 
                
                <WnList />
                </Route>

                <Route path = "/summber/:id"> 
                
                <SmList/>
                </Route>


                <Route path = "/page/:id">
                  <DetailPage />
                </Route>

                <Route path = "/Sign">
                  <Sign />
                </Route>
                <Route path = "/Login">
                <Login />
                </Route>

                <Route path = "/Home" component = {Home}>
                <Home />
                </Route>

              </Switch>
              <Footer />
      
        </Router>
    </>
  );
}

export default App;

