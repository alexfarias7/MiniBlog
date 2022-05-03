import P from 'prop-types';
import * as Styled from './style'


function PostDetails({post}) {
    return ( 
        <div>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>

            <p>{post.createdBy}</p>

            <div>
                {post.tagsArray.map((tag)=>(
                    <p key={tag}> <span>#</span> {tag}</p>
                ))}
            </div>
            <Styled.BtnOutline to={`/posts/${post.id}`} >
                Ler
            </Styled.BtnOutline>
        </div>

     );
}

PostDetails.propTypes = {
    post: P.instanceOf(Object).isRequired
  }

export default PostDetails;