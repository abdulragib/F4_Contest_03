import React,{createContext} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage  from './component/LandingPage/LandingPage'; 
import MovieDetailsPage from './component/MovieDetailsPage/MovieDetailsPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path={`/movies/${id}`} element={<MovieDetailsPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
