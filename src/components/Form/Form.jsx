import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

function Form() {
  return (
    <S.Container>
      <h1>FRUIT STORE</h1>
      <input placeholder="Type username" />
      <input placeholder="Type password" type="password" />
      <Link to="/home">
        <button style={{ backgroundColor: 'purple', color: 'white' }}>
          LOGIN
        </button>
      </Link>
    </S.Container>
  )
}

export default Form
