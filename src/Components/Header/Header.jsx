import { StyledHeader } from "../../Styles/HeaderStyles";
import { StyledNav } from "../../Styles/HeaderStyles";
import { StyledAHeader } from "../../Styles/HeaderStyles";
import { StyledSectionHeader } from "../../Styles/HeaderStyles";
import { StyledH1Header } from "../../Styles/HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1Header>Motion</StyledH1Header>

      <StyledNav>
        <StyledAHeader href="/posts">Posts</StyledAHeader>
        <StyledAHeader href="/friends">Find Friends</StyledAHeader>
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
