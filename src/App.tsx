import React from 'react';
import {Header} from "./components/header/Header";
import {Map} from './components/Map';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Form} from "./components/Form";

export const App = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Map/>}/>
                <Route path='/new-add' element={<Form/>}/>
            </Routes>
        </Router>

    </>
  );
}

