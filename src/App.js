import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header'
import NasaPhoto from './components/nasaPhoto'

function App() {
  const [nasaData, setNasaData] = useState(null)
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => {
      // console.log(res.data.url);
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <div className='App'></div>
    <div>
      <Header />
      {nasaData && <NasaPhoto nasaDataURL={nasaData.url}/>}
    </div>
    </>
  );
}

export default App;
