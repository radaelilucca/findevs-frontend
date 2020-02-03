/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { FaUserEdit, FaEyeSlash} from 'react-icons/fa';

import { Container, Buttons, DevTechs} from './styles';


function DevProfile({ dev }) {


   return (
    <>  
    <Container>
      <img src={dev.avatar_url} alt={dev.github_user}/>
      <h1>{dev.name}</h1>        
      <h3>{dev.github_user}</h3>
      <p>{dev.bio}
       </p>
        <DevTechs>
        <p>{dev.techs}</p>
        </DevTechs>
        
        <Buttons>

        <div>
        <button onClick={() => {
            alert("Funcionalidade Em Desenvolvimento")
          }} ><FaUserEdit/></button>
        <p>Edit Profile</p>
        </div>

        <div>
        <button onClick={() => {
            alert("Funcionalidade Em Desenvolvimento")
          }} ><FaEyeSlash/> </button>
        <p>Hide Yourself</p>
        </div>

        </Buttons>
      
      
      </Container>    
      
     
    </>
  );
}

export default DevProfile;
