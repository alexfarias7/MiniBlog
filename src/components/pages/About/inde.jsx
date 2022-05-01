
import * as Styled from './styles';

function About() {
  return (
    <Styled.About>
      <h2>
        Sobre o mini <span>Blog</span>
      </h2>
      <p>
        Este projeto foi feito com <strong>React</strong> no front end e
        <strong> Firebase</strong> no backend
      </p>

      <Styled.BtnAbout to="/posts/create" className="btn">
      
        Criar posts
      </Styled.BtnAbout>
    </Styled.About>
  );
}

export default About;
