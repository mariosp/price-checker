import React from "react";
import './App.css';
import MainContainer from "./layouts/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <MainContainer>
        <Header/>
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    </MainContainer>
  );
}

export default App;
