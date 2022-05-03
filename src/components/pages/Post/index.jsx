import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../../hooks/useFetchDocj';

import * as Styled from './styles';

function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);
  return (
    <Styled.PostContainer>
      {loading && <p>Carregando os posts...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <Styled.Tags className="tags">
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </Styled.Tags>
        </>
      )}
    </Styled.PostContainer>
  );
}

export default Post;
