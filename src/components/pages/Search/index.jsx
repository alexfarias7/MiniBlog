import * as Styled from './styles'
import { useFetchDocuments } from '../../../hooks/useFetchDocument';
import { useQuery } from '../../../hooks/useQuery';
import PostDetails from '../../layout/PostsDetails';


function Search() {

    const query = useQuery()
    const search = query.get('q')

    const  {documents: posts} = useFetchDocuments("posts", search)
    return ( 
        <Styled.SearchContainer>
            <h2>Buscar</h2>
           <div>
               {posts && posts.length === 0 && (
                   <Styled.NoPost>
                   <Styled.MsgP>Não foram encontrados posts em sua busca</Styled.MsgP>
                   <Styled.BtnSearch to='/'>Voltar</Styled.BtnSearch>
                   </Styled.NoPost>
               )}
               {posts && posts.map((post)=><PostDetails key={post.id}  post={post}/>)}
           </div>
        </Styled.SearchContainer>
     );
}

export default Search;