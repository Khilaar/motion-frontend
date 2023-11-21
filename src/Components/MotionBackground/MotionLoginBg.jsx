import { StyledButton, StyledImg, StyledMain, StyledP, StyledBtnP, StyledBtnDiv } from "../../Styles/MotionLogoBgStyles";

const MotionLogo = () => {
    return (
        <StyledMain>
            <StyledImg src="src/Components/MotionBackground/assets/images/logo_white.png" />
            <h1>Motion</h1>
            <StyledP>Connect with friends and the world around you with Motion.</StyledP>
            <StyledBtnDiv>            
            <StyledButton>
                <img src="assets/svgs/apple.svg" alt="" />
                <StyledBtnP>App Store</StyledBtnP>
            </StyledButton>
            <StyledButton>
                <img src="assets/svgs/apple.svg" alt="" />
                <StyledBtnP>Google Play</StyledBtnP>
            </StyledButton>
            </StyledBtnDiv>
        </StyledMain>
    )
}

export default MotionLogo;