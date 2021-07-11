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

const App = () => {
  return (
    <MainContainer>
        <Header/>
        <Router>
            <CacheSwitch>
                <CacheRoute exact path="/" >
                    <HomePage/>
                </CacheRoute>
                <Route path="/category/:id" >
                    <ListingPage />
                </Route>
                {/*<Route path="*">*/}
                {/*   <div>NO MATCH</div>*/}
                {/*</Route>*/}
            </CacheSwitch>
        </Router>
    </MainContainer>
  );
}

export default App;
