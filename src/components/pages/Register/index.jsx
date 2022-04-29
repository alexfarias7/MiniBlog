import { useState, useEffect } from 'react';

import * as Styled from './styles';

function Register() {
  return (
    <div>
      <h1>Cadastrar o usuário</h1>
      <p>Crie o seu usuario e compartilhe as suas histórias</p>
      <form>
        <label htmlFor='user'>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="nome do usuário"
          />
        </label>
        <label htmlFor='email'>
          <span>E-mail:</span>
          <input
            type='email'
            name="email"
            required
            placeholder="email do usuário"
          />
        </label>
        <label htmlFor='password'>
          <span>Senha:</span>
          <input
            type='password'
            name="password"
            required
            placeholder="insira sua senha"
          />
        </label>
        <label htmlFor='comfirmPassword'>
          <span>Senha:</span>
          <input
            type='password'
            name="confirmPassword"
            required
            placeholder="comfirme sua senha"
          />
        </label>
        <button type='submit' className='btn'>Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
