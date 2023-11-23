import { StyledHeader } from "../../Styles/HeaderStyles";
import { StyledNav } from "../../Styles/HeaderStyles";
import { StyledAHeader } from "../../Styles/HeaderStyles";
import { StyledSectionHeader } from "../../Styles/HeaderStyles";
import { StyledH1Header } from "../../Styles/HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1Header>Title</StyledH1Header>

      <StyledNav>
        <StyledAHeader href="#">Posts</StyledAHeader>
        <StyledAHeader href="#">Find Friends</StyledAHeader>
      </StyledNav>

      <StyledSectionHeader>
        <a href="#">Notifications</a>
        <a href="#">Profile</a>
        <a href="#">Dots</a>
      </StyledSectionHeader>
    </StyledHeader>
  );
};

export default Header;
