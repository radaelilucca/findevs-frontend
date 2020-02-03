import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {FaGithubAlt, FaLock} from 'react-icons/fa'
import { Container, 
  LoginBox, 
  SideBox, 
  Title, 
   Input,
  Button, 
  Form,
  InputGroup} from './styles';

import '../../global.css'
import logo from '../../assets/Logo3.png'

import api from '../../services/api'

function SignIn () {
const [gitUser, setGitUser] = useState('')
const [password, setPassword] = useState('')

async function handleSubmit(e) {
 e.preventDefault()
  
  try { const response = await api.post('/login', {
    github_user: gitUser,
    password
  })
  const {token} = response.data

  localStorage.setItem('findevs-token', token)
  alert('Sucess')

  } catch (error) {
    alert('Login Fail')
  }
   
}

useEffect(() => {


}, [])





  return (
    <Container>      
      <LoginBox>          
          <Form onSubmit={handleSubmit}>
          <img src={logo}/>
            <Title>Sign in   
            </Title>
            <InputGroup>
            <FaGithubAlt className="icon"/>
            <Input 
            placeholder="GitHub User" 
            name='gitUser'
            value={gitUser}
            onChange={e => setGitUser(e.target.value)}></Input>
            </InputGroup>
            <InputGroup>
            <FaLock className="icon"/>
            <Input 
            type="password" 
            placeholder="Password" 
            name='pass'
            value={password}
            onChange={e => setPassword(e.target.value)}></Input>
            </InputGroup>
            <Button type="submit">SIGN IN</Button>
          </Form>
      </LoginBox>
      <SideBox>
       <h1>Wellcome back, Dev!</h1>
       <h2>Log in to find other Devs!</h2>
       <p>Don't have an Account yet?</p>
       <Link to={'/signup'}><Button>SIGN UP</Button></Link>
      </SideBox>
    </Container>
  );
}
export default SignIn;
