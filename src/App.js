import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header'
import Top from './components/top'
import NasaPhoto from './components/nasaPhoto'
import Footer from './components/footer'

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
      {/* <div className='App-header'></div> */}
    <div>
      <Header />
      {nasaData && <Top nasaDataDate={nasaData.date}/>}
      {nasaData && <NasaPhoto nasaDataURL={nasaData.url}/>}
      {nasaData && <Footer nasaDataCopyR={nasaData.copyright}/>}
    </div>
    </>
  );
}

export default App;
