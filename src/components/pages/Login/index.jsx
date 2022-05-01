import { useState, useEffect } from 'react';
import { useAuthentication } from '../../../hooks/useAuthetication';

import * as Styled from './styles';
import * as StyledButton from '../../../styles/global';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();
  //* usehooks

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <Styled.Login>
      <h1>Entrar</h1>
      <p>Por favor, faça o login</p>

      <form onSubmit={handleSubmit}>
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
    </Styled.Login>
  );
}

export default Login;
