import { useState } from 'react';

//* hooks
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../../context/AuthContext';
import { useInsertDocument } from '../../../hooks/useInsertDocument';

import * as Styled from './styles';
import * as StyledButton from '../../../styles/global';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument('posts');

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    //* valiadate image URL

    try {
         new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    //* Criar arrays de tags
    const tagsArray = tags.split(',').map((tag)=>tag.trim().toLowerCase())
    //* checar todos os valores
    if (!title || !image || !tags || !body){
        setFormError('Por favor , preencha todos os campos')
    }



    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //* redirect to home page
    navigate('/')
  };

  return (
    <Styled.CreatePost>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quer compartilhar</p>

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
            type="url"
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

        {!response.loading && (
          <Styled.BtnCreatePost type="submit" className="btn">
            Criar
          </Styled.BtnCreatePost>
        )}

        {response.loading && (
          <Styled.BtnCreatePost type="submit" disabled>
            Aguarde...
          </Styled.BtnCreatePost>
        )}

        {response.error && <Styled.BtnError> {response.error}</Styled.BtnError>}
        {formError && (
          <StyledButton.MsgError> {formError}</StyledButton.MsgError>
        )}
      </form>
    </Styled.CreatePost>
  );
}

export default CreatePost;
