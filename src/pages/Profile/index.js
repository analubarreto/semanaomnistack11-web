import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './styles.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size="18" color="e02049" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$120</p>

          <button type="button"></button>
        </li>
      </ul>
    </div>
  )
}

export default Profile