/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import {
  FaGithubAlt, FaKey, FaCompass, FaCode,
} from 'react-icons/fa';

import { Form, CreateAccount, InputGroup } from './styles';

import api from '../../services/api';
import logo from '../../assets/Logo3.png';

export default function SignUpForm({ history }) {
  const [gitUser, setGitUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [techs, setTechs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },

      (err) => {

      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (confirmPassword !== password) {
        setConfirmPassword('');
        setPassword('');
        throw 'Passwords does not match.';
      }

      if (password.length < 6) {
        setConfirmPassword('');
        setPassword('');
        throw 'This password is too short! (min 6 characters)';
      }

      const newDev = await api.post('/devs', {
        github_user: gitUser,
        password,
        techs,
        latitude,
        longitude,
      });
      history.push('/');
    } catch (err) {
      await Swal.fire({
        title: err.response ? err.response.data.error : err,
        icon: 'error',
        confirmButtonColor: '#7159c1',
      });
    }
  }

  return (
    <>
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
            onChange={(e) => {
              setGitUser(e.target.value);
            }}
          />
        </div>

        <div className="password-block">
          <label htmlFor="password">
            <FaKey />
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            suggested="new-password"
          />
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        </div>

        <div className="techs-block">
          <label htmlFor="techs">
            <FaCode />
          </label>
          <input
            name="techs"
            id="techs"
            placeholder="Your main Techs splited by comma"
            required
            onChange={(e) => {
              setTechs(e.target.value);
            }}
          />
        </div>


        <div className="location-block">
          <label htmlFor="location">
            <FaCompass />
          </label>
          <input
            name="Latitude"
            type="number"
            id="Latitude"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <input
            name="Longitude"
            type="number"
            id="Longitude"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />


        </div>

        <button type="submit">New Dev</button>


      </Form>
      <CreateAccount>
        <p>Already have an Account?</p>
        <Link to="/">
          Login
        </Link>
      </CreateAccount>
    </>
  );
}
