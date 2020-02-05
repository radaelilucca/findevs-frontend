import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

import { FaGithubAlt, FaKey, FaCompass, FaCode } from 'react-icons/fa';
import { Container, SignUpBox, SideBox, Button, Form } from './styles';

import api from '../../services/api';
import '../../global.css';
import logo from '../../assets/Logo3.png';

export default function SignUp({ history }) {
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/devs', {
        github_user: gitUser,
        password,
        techs,
        latitude,
        longitude,
      });

      history.push('/');
    } catch (error) {
      console.log(error);
      alert('Error');
    }
  }

  const [gitUser, setGitUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [techs, setTechs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // get browser location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },

      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <Container>
      <SideBox>
        <h1>Hello, Dev!</h1>
        <h2>Create an Account and find some Devs arround you!</h2>
        <p>Already have an Account?</p>
        <Link to="/">
          <Button>SIGN IN</Button>
        </Link>
      </SideBox>

      <SignUpBox>
        <Form onSubmit={handleSubmit}>
          <img src={logo} alt="FinDevs" />
          <div className="input-block">
            <label htmlFor="GitHub User">
              <FaGithubAlt />
            </label>
            <input
              name="github_user"
              id="github_user"
              placeholder="GitHub User"
              required
              onChange={e => {
                setGitUser(e.target.value);
              }}
            />
          </div>

          <div className="input-block">
            <label htmlFor="password">
              <FaKey />
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              required
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={e => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">
              <FaCode />
            </label>
            <input
              name="techs"
              id="techs"
              placeholder="Your main Techs splited by comma"
              required
              onChange={e => {
                setTechs(e.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="location">
                <FaCompass />
              </label>
              <input
                name="Latitude"
                type="number"
                id="Latitude"
                placeholder="Latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
              <input
                name="Longitude"
                type="number"
                id="Longitude"
                placeholder="Longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">New Dev</button>
        </Form>
      </SignUpBox>
    </Container>
  );
}
