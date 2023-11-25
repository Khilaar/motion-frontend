import styled from "styled-components";

export const StyledMain = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width:100%;
    min-height: 100vh;
    background-image: 
    linear-gradient(102deg,rgb(196, 104, 255, 0.52), rgb(110, 145, 246, 0.22)),
    url("src/Components/MotionBackground/assets/images/background_image.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    margin-bottom: 2rem;
    box-sizing: border-box;
`
export const StyledImg = styled.img `
    width: 60px;
`

export const StyledP = styled.p `
    color: rgba(255, 255, 255, 0.486);
    margin-bottom: 50px;
`

export const StyledBtnDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;

    & :hover {
        cursor: pointer;
    }
`

export const StyledBtnP = styled.p `
    color: white;
    margin: 10px 20px;
`

export const StyledButton = styled.button `
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 25px;
`