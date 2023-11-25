import { StyledHeader } from "../../Styles/HeaderStyles";
import { StyledNav } from "../../Styles/HeaderStyles";
import { StyledAHeader } from "../../Styles/HeaderStyles";
import { StyledSectionHeader } from "../../Styles/HeaderStyles";
import { StyledH1Header } from "../../Styles/HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1Header>
        <img src="../src/Assets/favicon.png" alt="" />
        Motion
      </StyledH1Header>

      <StyledNav>
        <StyledAHeader href="/posts">
          <img src="../src/Assets/posts_logo.png" alt="" />
          Posts
        </StyledAHeader>
        <StyledAHeader href="/friends">
          <img src="../src/Assets/contacts.png" alt="" />
          Find Friends
        </StyledAHeader>
      </StyledNav>

      <StyledSectionHeader>
        <a href="/notifications">Notifications</a>
        <a href="/profile">Profile</a>
        <a href="#">Dots</a>
      </StyledSectionHeader>
    </StyledHeader>
  );
};

export default Header;
