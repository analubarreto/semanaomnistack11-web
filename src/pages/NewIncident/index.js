import React from 'react'

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

const NewIncident = () => {
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"/>

          <h1>Novo Incidente</h1>
          <p>Registre os casos da sua ONG.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="e02041"/>
            Voltar
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="T´ítulo do Caso"/>
          <textarea type="email" placeholder="Descrição"/>
          <input type="text" placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident