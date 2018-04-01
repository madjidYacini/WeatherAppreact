import React from "react"
import Titles from './components/titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "93db09326eb03fab678a25dfbfacb785"


class App extends React.Component {
  state ={
    temperature : undefined,
    city : undefined,
    country : undefined,
    humedity : undefined,
    description : undefined,
    err : undefined
  }
  getWeather = async (e)=>{
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
    try {
      
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
     
      const data = await api_call.json()
      if (country && city){
        this.setState ({
          temperature : data.main.temp,
          city : data.name,
          country : data.sys.country,
          humidity : data.main.humidity,
          description : data.weather[0].description,
          err :""
    
        })
        console.log(data)
        console.log("MADJID"+data.name)
        
      }else{
        this.setState({
          temperature : undefined,
    city : undefined,
    country : undefined,
    humedity : undefined,
    description : undefined,
    err : "please enter values"
        })
      }
    } catch (error) {
      console.log(error)
      alert("city or country not found, please try again with a good syntax")
    }
   
    
  }
  render(){
    return (
      <div>
        <div className = "wrapper">
           <div className = "main">
               <div className = "container" >
                  <div className = "row ">
                    <div className = 'col-xs-5 title-container'>
                        <Titles />
                    </div>
                    <div className = 'col-xs-7 form-container'>
                    <Form getWeather= {this.getWeather} />
                    <Weather 
                    temperature = {this.state.temperature}
                    city ={this.state.city}
                    country ={this.state.country}
                    humidity ={this.state.humidity}
                    description ={this.state.description}
                    err = {this.state.err}
                    />                     
                    </div>
                  </div>
                </div> 
           </div>
        </div>
      </div>
    );
  }
}
export default App

