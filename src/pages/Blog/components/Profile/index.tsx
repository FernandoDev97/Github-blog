import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="http://github.com/FernandoDev97.png" />
      <ProfileDetails>
        <header>
          <h1>Fernando Souza</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} /> 
            FernandoDev97
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} /> 
            The Brooklyn Brothers
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> 
            12 Seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
