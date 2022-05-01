import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthValue } from '../../../context/AuthContext';

import * as Styled from './styles';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.CreatePost>
      <h2>Criar Post</h2>
      <p>Escreva spbre o que quer compartilhar</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Titulo:</span>
          <input
            type="text"
            name="tilte"
            required
            placeholder="defina um titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="img">
          <span>Imagem:</span>
          <input
            type="text"
            name="img"
            required
            placeholder="insira uma imagem para o post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="body">
          <span>Conteudo:</span>
          <textarea
            name="body"
            required
            placeholder="insira o conteúdo para o post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>

        <label htmlFor="tags">
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="insira as tags separado por virgula"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        <Styled.BtnCreatePost type="submit" className="btn">
            Cadastrar
          </Styled.BtnCreatePost>

      {/*   {!loading && (
          <StyledButton.Btn type="submit" className="btn">
            Cadastrar
          </StyledButton.Btn>
        )}

        {loading && (
          <StyledButton.Btn type="submit" className="btn" disabled>
            Aguarde...
          </StyledButton.Btn>
        )}

        {error && <StyledButton.MsgError> {error}</StyledButton.MsgError>} */}
      </form>
    </Styled.CreatePost>
  );
}

export default CreatePost;
