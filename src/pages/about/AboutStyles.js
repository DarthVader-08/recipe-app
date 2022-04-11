import styled from "styled-components";

export const Container =styled.div`
background: #458f92;

max-height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
flex-wrap: wrap;

justify-content: center;
line-height: 1.5;
align-items: center;
h1{
    margin-top:2rem;
}
span{
    
    color: #fff;
    font-size:3rem;
    font-family: 'Girassol', sans-serif;
}


`
export const Info = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: right;
    width: 600px;
    border : 1px solid #fff;
    border-radius: 10px;
    a{
        color: #fff;
    }
    
    `
 export  const StyleImg = styled.img`
 width: 500px;
 ` 