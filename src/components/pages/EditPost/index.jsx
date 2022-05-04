import { useState, useEffect } from 'react';

//* hooks
import { useNavigate, useParams } from 'react-router-dom';

import { useUpdateDocument } from '../../../hooks/UseUpdateDocument';
import { useAuthValue } from '../../../context/AuthContext';
import { useFetchDocument } from '../../../hooks/useFetchDocj';

import * as Styled from './styles';
import * as StyledButton from '../../../styles/global';

function EditPost() {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(',');
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument('posts');

  const navigate = useNavigate();
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
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());
    //* checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError('Por favor , preencha todos os campos');
    }

    if (formError) return;

    const data={
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName
    }

    updateDocument(id, data);

    //* redirect to home page
    navigate('/dashboard');
  };

  return (
    <Styled.EditPost>
      {post && (
        <>
          <h2>Editar Post: {post.title}</h2>
          <p>Altere os dados do post como voc~e desejar!</p>

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
            <p className="preview_title">Preview da imagem</p>

            <Styled.ImgPreview src={post.image} alt={post.title} />

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
              <Styled.BtnEditPost type="submit" className="btn">
                Editar
              </Styled.BtnEditPost>
            )}

            {response.loading && (
              <Styled.BtnEditPost type="submit" disabled>
                Aguarde...
              </Styled.BtnEditPost>
            )}

            {response.error && (
              <Styled.BtnError> {response.error}</Styled.BtnError>
            )}
            {formError && (
              <StyledButton.MsgError> {formError}</StyledButton.MsgError>
            )}
          </form>
        </>
      )}
    </Styled.EditPost>
  );
}

export default EditPost;
