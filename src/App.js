import React from "react";
import './App.css';
import MainContainer from "./layouts/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListingPage from "./pages/ListingPage/ListingPage";
import CacheRoute, {CacheSwitch} from "react-router-cache-route";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

const App = () => {
  return (
    <MainContainer>
        <Header/>
        <Router>
            <CacheSwitch>
                <CacheRoute exact path="/" >
                    <HomePage/>
                </CacheRoute>
                <CacheRoute path="/category/:id" render={(props)=> <ListingPage {...props} />} >
                </CacheRoute>
                <Route path="/product/:id" render={(props)=> <DetailsPage {...props} />} >
                </Route>
            </CacheSwitch>
        </Router>
    </MainContainer>
  );
}

export default App;
