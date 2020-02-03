import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Container, 
  SignUpBox, 
  SideBox, 
  Input,
  Button, 
  Form} from './styles';

import api from '../../services/api'
import '../../global.css'
import logo from '../../assets/Logo3.png'

export default function SignUp() {

  const [gitUser, setGitUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [techs, setTechs] = useState([])
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);



async function handleSubmit(e){
  e.preventDefault()

  console.log(gitUser, password, confirmPassword, latitude, longitude, techs)
 
  try {
    const response = await api.post('/devs', {
      github_user: gitUser,
      password,
      techs,
      latitude,
      longitude
    })
  
    console.log(response.data)
    
  } catch (error) {
    console.log(error)
    
  }
 

}

  return (
    <Container>
      
       <SideBox>
       <h1>Hello, Dev!</h1>
       <h2>Create an Account and find some Devs arround you!</h2>
       <p>Already have an Account?</p>
       <Link to={'/'}><Button>SIGN IN</Button></Link>

      </SideBox>

      <SignUpBox>          
        <Form onSubmit={handleSubmit}>
          <img src={logo}/>
            <Input 
            placeholder="GitHub User" 
            name='gitUser'
            value={gitUser}
            onChange={e => setGitUser(e.target.value)}></Input>

            <Input 
            type="password" 
            placeholder="Create a secret Password" 
            name='pass'
            value={password}
            onChange={e => setPassword(e.target.value)}></Input>

            <Input 
            type="password" 
            placeholder="Repeat your secret Password" 
            name='confirmPass'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}></Input>
            
            <Input 
            type="text" 
            placeholder="Techs" 
            name='techs'
            value={techs}
            onChange={e => setTechs(e.target.value)}></Input>
            <Button type="submit">SIGN UP</Button>
          </Form>           
      </SignUpBox>

     

    </Container>
  );
}
