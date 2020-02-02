import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #FFF;

img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 10px;  
  border: 3px solid  rgba(85, 58, 162, 1);
  transition: 0.1s linear;

    &:hover{
    transform: scale(1.3);
    margin-bottom: 35px;
    margin-top: 25px;
    border-radius: 5px;   

        }
   
  }

h1 {
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 35px;
color: #444444;

}

h3 {
font-weight: bold;
font-size: 20px;
color: rgba(85, 58, 162, 0.62);
margin-bottom: 20px;
}

p {
margin-top: 10px;
font-weight: bold;
font-size: 19px;
text-align: center;
color: #999999;
}


`
export const DevTechs = styled.div`

p {
  margin-top: 35px;
  margin-bottom: 45px;
  color: #222;
  font-size: 20px;
}



`

export const Buttons = styled.div`

margin-top: 35px;
display: flex;
justify-content: space-between;
width: 100%;

div {
  display: flex;
  margin-top: 40px;

    p{
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      margin-left: 10px;
      color: rgba(85, 58, 162, 0.62);
    }
}

button {
cursor: pointer;
background: none;
border: none;
font-size: 35px; 
color: rgba(85, 58, 162,1);
  
}



`
