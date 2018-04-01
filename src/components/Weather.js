import React from "react"

const Weather = props =>(
   
        <div className = "weather__info">
    {
        props.city && props.country && <p className = "weather__key ">Location :
        <span className = "weather__value "> { props.city}, { props.country} </span>
         </p>
    }
    { 
        props.description && <p className = "weather__key ">Description :
        <span className = "weather__value "> { props.description} </span>
         </p>
    }
    { 
        props.temperature && <p className = "weather__key ">Temperature :
        <span className = "weather__value "> { props.temperature - 273.15} </span>
         </p>
    }
    { 
        props.humidity && <p className = "weather__key "> humedity :
        <span className = "weather__value ">{ props.humidity} </ span>
         </p>
    }
    { 
        props.err && <p className = "weather__error ">error :
         { props.err} 
         </p>
    }
       
       </div>
    
)
export default Weather