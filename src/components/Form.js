import React from "react"

const Form = props =>(
    
    <form onSubmit={props.getWeather} method="POST">
            <input type = "text" name ="city" placeholder ="city:Paris" required />
            <input type = "text" name ="country" placeholder ="countryCode:FR."  required   />
            <button>Get weather </button>
            </form>
)
export default Form