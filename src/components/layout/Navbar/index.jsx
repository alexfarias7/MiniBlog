//* Styled componentes
import * as Styled from './styles';

//* routes
import { routes } from './routes';

function Navbar() {
  const routesComponents = routes.map(({ name, path, id }) => (
    <li key={id}>
      <Styled.NavActive to={path}>{name}</Styled.NavActive>
    </li>
  ));

  return (
    <Styled.Navbar>
      <Styled.Brand to="/">
        Mini <span>Blog</span>
      </Styled.Brand>

      <Styled.LinksLists>{routesComponents}</Styled.LinksLists>
    </Styled.Navbar>
  );
}

export default Navbar;
