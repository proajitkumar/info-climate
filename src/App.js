import {useState} from 'react';
import './App.css';
import Forecast from './pages/Forecast';
import Navbar from './pages/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const API_KEY = '4de36569da6c7986be4924308bd5df38';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
  const IMAGE_URL = 'http://openweathermap.org/img/wn/';
  
  const [city, setCity] = useState('delhi');
  const searchCity = (e)=>{
    setCity(e);
    if (e === '' || e === undefined) {
      setCity('delhi');
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar searchCity={searchCity}/>
            <Forecast searchCity={searchCity} api_key={API_KEY} key={'delhi'} image_url={IMAGE_URL} base_url={BASE_URL} forecast_url={FORECAST_URL} city={city} />
          </> 
        }>
        </Route>
        <Route path="/find" element={
          <>
            <Navbar searchCity={searchCity}/>
            <Forecast searchCity={searchCity} api_key={API_KEY} key={city} image_url={IMAGE_URL} base_url={BASE_URL} forecast_url={FORECAST_URL} city={city} />
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
