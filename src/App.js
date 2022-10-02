import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Context from './components/Context/Context';
import Create from './components/CreateEventPage/Create';
import Event from './components/EventPage/Event';
import Home from './components/HomePage/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/event' element={<Event />} />
        </Routes>
      </Context>
    </BrowserRouter>
  )
}

export default App