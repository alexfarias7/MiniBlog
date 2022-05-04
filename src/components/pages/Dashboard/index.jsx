import { useAuthValue } from '../../../context/AuthContext';
import { useFetchDocuments } from '../../../hooks/useFetchDocument';

import * as Styled from './styles';

function Dashboard() {
  const { user } = useAuthValue();
  const { uid } = user;
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

  const deleteDocument = (id) => {};
  if (loading) return <p>Carregando...</p>
  return (
    <Styled.Dashboard>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <Styled.NoPost>
          <p>Não foram encontrados posts</p>
          <Styled.BtnDasboard to="/posts/create">
            Criar o primeiro post
          </Styled.BtnDasboard>
        </Styled.NoPost>
      ) : (
        <>
          <Styled.PostHeader>
            <span>Título</span>
            <span>Ações</span>
          </Styled.PostHeader>
          {posts &&
            posts.map((post) => (
              <Styled.PostRow key={post.id}>
                <p>{post.title}</p>

                <div>
                  <Styled.LinkOutline to={`/posts/${post.id}`}>
                    Ver
                  </Styled.LinkOutline>
                  <Styled.LinkOutlineEdit to={`/posts/edit/${post.id}`}>
                    Editar
                  </Styled.LinkOutlineEdit>
                  <Styled.BtnDangerDashboard
                    onClick={() => deleteDocument(post.id)}
                    type="submit"
                  >
                    Excluir
                  </Styled.BtnDangerDashboard>
                </div>
              </Styled.PostRow>
            ))}
        </>
      )}
    </Styled.Dashboard>
  );
}

export default Dashboard;
