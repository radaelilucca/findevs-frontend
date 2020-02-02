/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { FaUserEdit, FaEyeSlash} from 'react-icons/fa';

import { Container, Buttons, DevTechs} from './styles';


function DevProfile({ onSubmit }) {
  const [github_user, setGithub_user] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isValid, setIsValid] = useState(true);


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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsValid(true);

    if (github_user === '') {
      setIsValid(false);
    }
    await onSubmit({
      github_user,
      techs,
      latitude,
      longitude,
    });
    setGithub_user('');
    setTechs('');
    setIsValid(true);
  }

  return (
    <>  
    <Container>
    <img src="https://avatars2.githubusercontent.com/u/29178479?v=4" alt="DevName"/>
      <h1>Lucca Radaeli</h1>
      <h3>@radaelilucca</h3>
      <p>Aluno do GoStack, 
        Bootcamp da @Rocketseat! 
        Estudando NodeJS, 
        React e ReactNative!
       </p>
        <DevTechs>
        <p>{`< NODEJS, REACTJS, REACT NATIVE >`}</p>
        </DevTechs>
        
        <Buttons>

        <div>
        <button><FaUserEdit/></button>
        <p>Edit Profile</p>
        </div>

        <div>
        <button><FaEyeSlash/> </button>
        <p>Hide Yourself</p>
        </div>

        </Buttons>
      
      
      </Container>    
      
     
    </>
  );
}

export default DevProfile;
