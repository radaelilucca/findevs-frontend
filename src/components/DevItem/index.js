/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaGithubAlt, FaTrashAlt, FaMapMarkedAlt } from 'react-icons/fa';
import './styles.css';

// import Swal from 'sweetalert2'

export default function DevItem({ dev, deletar }) {
  // async function handleRemoveUser() {
  // await Swal.fire({
  //   title: 'Remover Usuário',
  // text: 'Você tem certeza que quer remover o usuário?',
  //  icon: 'warning',
  //  showCancelButton: true,
  //  cancelButtonColor: '#FF6E6E',
  //  confirmButtonColor: '#7159c1',
  //  reverseButtons: true,
  //   confirmButtonText: 'Sim, remover usuário!',
  //   cancelButtonText: 'Cancelar',
  // }).then(async result => {
  //   if (result.value) {
  //    await deletar(dev.github_user);
  //     Swal.fire('Removido!', 'Usuário removido com sucesso.', 'success');
  //   }
  //  });
  // }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>

      <p>{dev.bio}</p>

      <div className="dev-buttons">
        <a
          id="github"
          href={`https://github.com/${dev.github_user}`}
          target="blank"
        >
          <button>
            <FaGithubAlt />
          </button>
        </a>
        <button className="map-button">
          <FaMapMarkedAlt />
        </button>
        <button
          title="Deletar"
          type="button"
          onClick={() => {
            alert('Funcionalidade Desabilitada no Momento!');
          }}
          id="trash"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}
