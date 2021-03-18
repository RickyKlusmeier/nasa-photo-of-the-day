import React from 'react'


const NasaPhoto = (props) => {
    const { nasaDataURL } = props;
    // console.log(nasaData?.url)
return (
    <div>
       <img src={nasaDataURL} />
    </div>
)}

export default NasaPhoto