import styled from "styled-components";

export const Container = styled.div`
background: #7159c1;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

background: linear-gradient(240.84deg, 
  #553AA2 0.09%, rgba(85, 58, 162, 0.95) 
  16.86%, rgba(85, 58, 162, 0.9) 28.38%, 
  rgba(85, 58, 162, 0.85) 39.87%, 
  rgba(85, 58, 162, 0.75) 51.19%, 
  rgba(85, 58, 162, 0.65) 62.48%, 
  rgba(85, 58, 162, 0.55) 72.16%, 
  rgba(85, 58, 162, 0.45) 84.15%, 
  rgba(85, 58, 162, 0.4) 100%);

box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginBox = styled.div`
  width: 600px;
  height: 500px;
  background: #FFFFFF;
  border-radius: 15px;
`;


export const SideBox = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 600px;
height: 500px;
background: #FFFFFF;
border-radius: 15px;
margin-left: 10px;

Button {
  width: 320px;
  height: 60px;
}

h1 {
  width: 75%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 94px;
text-align: center;
line-height: 60px;
color: #553AA2;
margin-bottom: 50px;
}

h2 {
font-style: normal;
font-weight: bold;
font-size: 45px;
color: #555555;
margin-bottom: 60px;

}

p {
font-style: normal;
font-weight: bold;
font-size: 25px;
color: rgba(102, 102, 102, 0.85);
}
`;


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.icon{
  font-size: 35px;
  color: #553AA2;
  
}

img {
  width: 40%
}

`

export const Title = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
color: rgba(102, 102, 102, 0.95);
margin-bottom: 30px;

`

export const InputGroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 450px;
height: 70px;
background: rgba(85, 58, 162, 0.1);
border: 3px solid #553AA2;
box-sizing: border-box;
border-radius: 15px;
margin-bottom: 14px;
transition: 0.1s linear;

`
export const Input = styled.input`
width: 90%;
background: none;
border: 0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
color: #573CA3;
display: flex;
align-items: center;
text-align: center;

`

export const Button = styled.button`
width: 460px;
height: 78.15px;
background: #573CA3;
border-radius: 16px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 41px;
color: #FFFFFF;
margin-top: 20px;
transition: 0.05s linear;


text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

&:hover {
    transform: scaleX(1.06);
    background: #8e4dff;
  }



`
