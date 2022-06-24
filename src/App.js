
import './App.css';

import React, { Component,Fragment } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<News key="sports" country="in" category="sports"/>}/>
          <Route exact path="/business" element={<News key="business" country="in" category="business"/>}/>
          <Route exact path="/general" element={<News key="general" country="in" category="general"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}/>
         
          <Route exact path="/health" element={<News key="health" country="in" category="health"/>}/>
          <Route exact path="/tech" element={<News key="tech" country="us" category="tech"/>}/>
          <Route exact path="/sports" element={<News key="sports" country="in" category="sports"/>}/>
        </Routes>
        </Fragment>
        </Router>
      </div>
    )
  }
}

