import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer to='/post/1'>
      <div>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat...
      </p>
    </PostContainer>
  );
}
