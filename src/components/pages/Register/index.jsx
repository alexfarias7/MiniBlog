import { useState, useEffect } from 'react';
import { useAuthentication } from '../../../hooks/useAuthetication';

import * as Styled from './styles';
import * as StyledButton from '../../../styles/global';

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  //* usehooks

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <Styled.Register>
      <h1>Cadastrar o usuário</h1>
      <p>Crie o seu usuario e compartilhe as suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="comfirmPassword">
          <span>Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="comfirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <StyledButton.Btn type="submit" className="btn">
            Cadastrar
          </StyledButton.Btn>
        )}

        {loading && (
          <StyledButton.Btn type="submit" className="btn" disabled>
            Aguarde...
          </StyledButton.Btn>
        )}

        {error && <StyledButton.MsgError> {error}</StyledButton.MsgError>}
      </form>
    </Styled.Register>
  );
}

export default Register;
