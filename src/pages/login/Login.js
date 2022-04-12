import React from 'react'
import{LoginDiv,FormDiv} from './LoginStyles.js'
import mealSvg from '../../assets/meal.svg'
// import { useNavigate } from "react-router-dom";



  
const Login = () => {
  
  const user = {
    username: "user",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/about";
    
  };
  return (
    <LoginDiv>
        <FormDiv onSubmit={handleSubmit}>
          <img src={mealSvg} alt="" />
          <h1>{"<Clarusway>"} Recipe</h1>
          <input type="text" placeholder='Username' required/><br />
          <input type="password" placeholder='Password' required /><br />
          <button type="submit">Login</button>
        </FormDiv>
    </LoginDiv> 
  )
}
export default Login