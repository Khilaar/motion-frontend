import { useState } from "react"
import { StyledAHeaderRight, StyledATag, StyledHeader, StyledImg, StyledP, StyledRighContainer, StyledleftContainer, ThreeDotsSpan } from "../../Styles/HeaderStyles"
import { StyledNav } from "../../Styles/HeaderStyles"
import { StyledAHeader } from "../../Styles/HeaderStyles"
import { StyledSectionHeader } from "../../Styles/HeaderStyles"
import { StyledH1Header } from "../../Styles/HeaderStyles"
import { logout } from "../../Store/Slices/userSlice"
import { useDispatch } from "react-redux"


const Header = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isNotificationsVisible, setNotificationsVisible] = useState(false);
    const dispatch = useDispatch();

    const handleNotificationsClick = () => {
        setNotificationsVisible(!isNotificationsVisible);
    }

    const handleHeaderClick = () => {
        console.log('handleHeaderClick');
        setPopupVisible(!isPopupVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        dispatch(logout());
    }


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
                    <StyledAHeader  href="/friends">
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/icon-friends.svg" />
                        <StyledP>Find Friends</StyledP>
                    </StyledAHeader>
                </StyledNav>
            </StyledleftContainer>

            <StyledRighContainer>
                <StyledSectionHeader>
                    <StyledAHeaderRight href="/notifications" onClick={handleNotificationsClick}>
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/notification_bell.svg" />
                    </StyledAHeaderRight>
                    <StyledAHeaderRight  href="/profile">
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/avatar.svg" />
                    </StyledAHeaderRight>
                    <StyledAHeaderRight  href="#" onClick={handleHeaderClick}>
                        <StyledImg src="src/Components/MotionBackground/assets/svgs/menu.svg" />
                        {isNotificationsVisible && (
                        <span>
                            <StyledATag href="/profile">Profile</StyledATag>
                            <StyledATag onClick={handleLogout} href="/">Logout</StyledATag>
                        </span>
                        )}
                    </StyledAHeaderRight>
                </StyledSectionHeader>
            </StyledRighContainer>
        </StyledHeader>
    )
}

export default Header