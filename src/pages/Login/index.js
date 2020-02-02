import React, {img} from 'react';
import {Formik} from 'formik'

import { Container, 
  LoginBox, 
  SideBox, 
  Title, 
   Input,
  Button, 
  Form} from './styles';

import '../../global.css'
import logo from '../../assets/Logo3.png'

export default function Login() {
  return (
    <Container>

      
      <LoginBox>  
        <Formik>
          <Form>
          <img src={logo}/>
            <Title>Sign in   
            </Title>
            <Input autocomplete="off" placeholder="GitHub User" name='gitUser'></Input>
            <Input type="password" placeholder="Password" name='pass'></Input>
            <Button>SIGN IN</Button>
          </Form>

          
        </Formik>  
      </LoginBox>
      <SideBox>
       <h1>Wellcome back, Dev!</h1>
       <h2>Log in to find other Devs!</h2>
       <p>Don't have an Account yet?</p>
       <Button>SIGN UP</Button>

      </SideBox>


    </Container>
  );
}
