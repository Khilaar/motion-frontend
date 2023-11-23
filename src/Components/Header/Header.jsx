import { useState } from "react"
import { PopUpP, PopUpProfile, StyledHeader, StyledImg, StyledP, StyledRighContainer, StyledleftContainer } from "../../Styles/HeaderStyles"
import { StyledNav } from "../../Styles/HeaderStyles"
import { StyledAHeader } from "../../Styles/HeaderStyles"
import { StyledSectionHeader } from "../../Styles/HeaderStyles"
import { StyledH1Header } from "../../Styles/HeaderStyles"


const Header = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleHeaderClick = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <StyledHeader>
            <StyledleftContainer>
                <StyledImg src="src/Components/MotionBackground/assets/images/logo.png" />
                <StyledH1Header>Motion</StyledH1Header>

                <StyledNav>
                    <StyledAHeader href="/posts">
                        <StyledImg src="src/Components/MotionBackground/assets/images/posts_logo.png" />
                        <StyledP>Posts</StyledP>
                    </StyledAHeader>
                    <StyledAHeader noPadding href="/friends">
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/icon-friends.svg" />
                        <StyledP>Find Friends</StyledP>
                    </StyledAHeader>
                </StyledNav>
            </StyledleftContainer>

            <StyledRighContainer>
                <StyledSectionHeader>
                    <StyledAHeader noPadding href="#">
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/notification_bell.svg" />
                    </StyledAHeader>
                    <StyledAHeader noPadding href="#" onClick={handleHeaderClick}>
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/avatar.svg" />
                    </StyledAHeader>
                    <StyledAHeader noPadding href="#">
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/menu.svg" />
                    </StyledAHeader>
                    {isPopupVisible && (
                            <PopUpProfile>
                                <PopUpP>
                                    <StyledImg src="src/Components/MotionBackground/assets/svgs/avatar.svg"></StyledImg>
                                    <StyledP>Profile</StyledP>
                                </PopUpP>
                                <PopUpP>
                                    <StyledImg src="src/Components/MotionBackground/assets/svgs/avatar.svg"></StyledImg>
                                    <StyledP>Logout</StyledP>
                                </PopUpP>
                            </PopUpProfile>
                        )}
                </StyledSectionHeader>
            </StyledRighContainer>
        </StyledHeader>
    )
}

export default Header