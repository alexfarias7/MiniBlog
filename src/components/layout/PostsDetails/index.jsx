import P from 'prop-types';
import * as Styled from './style'


function PostDetails({post}) {
    return ( 
        <Styled.PostDetails>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>

            <Styled.CreatedBy>{post.createdBy}</Styled.CreatedBy>

            <Styled.Tags className='tags'>
                {post.tagsArray.map((tag)=>(
                    <p key={tag}> <span>#</span> {tag}</p>
                ))}
            </Styled.Tags>
            <Styled.BtnOutline to={`/posts/${post.id}`} >
                Ler
            </Styled.BtnOutline>
        </Styled.PostDetails>

     );
}

PostDetails.propTypes = {
    post: P.instanceOf(Object).isRequired
  }

export default PostDetails;