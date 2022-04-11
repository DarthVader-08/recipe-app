import styled from "styled-components";

export const LoginDiv = styled.div`
background-image: url('https://picsum.photos/1600/900');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
max-height:100%
`

export const FormDiv = styled.form`
width: 600px;
min-width: 600px;
height: 600px;
background-color: rgba(0, 173, 181, 0.5);
border-radius: 50%;
border: 2px solid #e1f1dd;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color : white;
img{
    margin:1rem;
    width:150px;
    
}
h1{
  font-family: 'Girassol', sans-serif;
  font-size: 3rem;
}
input{
    height: 50px;
    font-size: 2rem;
    width: 250px;
    border-radius: 5px;
    font-family: 'Girassol', sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    margin: 0.5rem;
    text-indent: 20px;
}
button{
  font-size: 2rem;
  font-family: 'Girassol', sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
 border-radius: 5px;
  height: 50px;
  width: 250px;
  cursor: pointer;
  margin: 0.5rem;
}

`