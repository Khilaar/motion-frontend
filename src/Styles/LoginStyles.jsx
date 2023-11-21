import styled from "styled-components";

export const StyledMainDiv = styled.div `
    display: flex;
    flex-direction: row;
`
export const StyledLeftMainDiv = styled.div `
    display: flex;
    width: 50vw;
`

export const StyledRightMainDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vw;
    background-color: white;
    color: black;
    justify-content: flex-start;
    
`

export const StyledLoginHeader = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 20px 20px;
`
export const StyledLoginHeaderButton = styled.button `
    background-color: transparent;
    padding: 5px 40px;
    margin-left: 50px;
    border: 1px solid grey;
    border-radius: 25px;

    &:hover {
        cursor: pointer;
    }
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 50%;
`

export const StyledInput = styled.input `
    display: flex;
    border: 0px;
    border-bottom: 1px solid grey;
    margin-top: 10%;
    padding: 20px;
`

export const StyledH1 = styled.h1 `
    
`

export const StyledP = styled.p `
    
`

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 20vh;
`

export const StyledSignInButton = styled.button `
    background-image: linear-gradient(to right, #9e58a3 0%, #5c5695  51%, #cb6cd4  100%);
    margin-top: 20%;
    padding: 15px 45px;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50%;

    &:hover {
        cursor: pointer;
    }
`

export const StyledVerificationDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
`