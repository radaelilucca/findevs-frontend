/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

import api from '../../services/api';

import '../../global.css';
import '../../Sidebar.css';
import './Main.css';

import DevItem from '../../components/DevItem';
import DevProfile from '../../components/DevProfile';

// import logo from '../../assets/Logo3.png';

function Main() {
  const [devs, setDevs] = useState([]);
  const [loggedDev, setLoggedDev] = useState('');
  const [loaded, setLoaded] = useState(false);

  // load devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);

      // decode token to get logged user
      const token = await localStorage.getItem('findevs-token');

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      const { github_user } = decoded;

      setLoggedDev(github_user);
      console.log(loggedDev);
      setLoaded(true);
    }

    loadDevs();
  }, []);

  async function handleInativeDev(data) {
    await api.put(`/devs/delete/${data}`);
    console.log(data.github_user);

    const filterDevs = devs.filter(dev => dev.github_user !== data.github_user);

    setDevs(filterDevs);
  }

  // trata o token recibibo do login

  return (
    <div id="main">
      <aside>
        <DevProfile dev={loggedDev} key={loggedDev.name} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} deletar={handleInativeDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Main;
