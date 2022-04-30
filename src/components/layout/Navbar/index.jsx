//* Styled componentes
import * as Styled from './styles';

//* routes
import { routes } from './routes';

//* hooks
import { useAuthentication } from '../../../hooks/useAuthetication';
import { useAuthValue } from '../../../context/AuthContext';

function Navbar() {

  const { user } = useAuthValue();
  console.log(user)
  

  /*   const routesComponents = routes.map(({ name, path, id }) => (
    <li key={id}>
      <Styled.NavActive to={path}>{name}</Styled.NavActive>
    </li>
  )); */

  return (
    <Styled.Navbar>
      <Styled.Brand to="/">
        Mini <span>Blog</span>
      </Styled.Brand>

      {/* 
      <Styled.LinksLists>{routesComponents}</Styled.LinksLists> */}
      <Styled.LinksLists>
        <li><Styled.NavActive to="/">Home</Styled.NavActive></li>

        {!user && (
          <>
            <li><Styled.NavActive to="/login">Entrar</Styled.NavActive></li>

            <li><Styled.NavActive to="/register">Cadastrar</Styled.NavActive></li>
          </>
        )}

        {user && (
          <>
            <li><Styled.NavActive to="/posts/create">Novo Post</Styled.NavActive></li>

            <li><Styled.NavActive to="/dashboard">Dashboard</Styled.NavActive></li>
          </>
        )}

        <li><Styled.NavActive to="/about">Sobre</Styled.NavActive></li>
      </Styled.LinksLists>
    </Styled.Navbar>
  );
}

export default Navbar;
