import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostHeader() {
  const navigate = useNavigate()
  
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={() => navigate(-1)}
          variant="iconLeft"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>Lorem ipsum dolor sit amet.</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          fernando Souza
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há um dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
