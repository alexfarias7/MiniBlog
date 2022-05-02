//* hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

//* components

//* css
import * as Styled from './styles';

function Home() {
  const [query, setQuery] = useState('');
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Home>
      <h1>Veja os nossos posts mais recents</h1>
      <Styled.SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="busque por tags dsejadas..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Styled.BtnDarkHome type="submit"> Pesquisar</Styled.BtnDarkHome>
      </Styled.SearchForm>

      <div>
          <h1>Posts...</h1>
          {
              posts && posts.length ===0 && (
                  <Styled.NoPost>
                      <p>Não foram encontrados pots...</p>
                      <Styled.BtnLink to='/posts/create'>Crie um post</Styled.BtnLink>

                  </Styled.NoPost>
              )
          }
      </div>
    </Styled.Home>
  );
}

export default Home;
