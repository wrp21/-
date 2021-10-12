import styled from 'styled-components';



export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;

    margin-top:100px;
    padding:20px;


`;

export const UserInput = styled.input`
    border: 3px solid blue;
    width:300px;
    box-sizing:border-box;
    height:50px;
    border-radius:15px;
    text-align:center;
    
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const MainHeadContainer = styled.header`
    width:100%;
    height:100px;
    padding-left:10px;
    padding-top:10px;

    display:flex;
`;

export const Title = styled.h1`
    width:50%;
    height:100px;
    padding-left:10px;
    padding-top:10px;
`;

export const NaviContainer = styled.nav`
    width:100%;
    height:100px;
    padding-right:10px;
  
    padding-top:10px;
`;



export const MainContainer = styled.article`
    width: 80%;
    margin: 0 auto;

    border: solid #eaeaea 1px;
    
`;


export const Footer = styled.footer`
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px 20px;
    text-align: center;
    color: black;
    background: lightgray;   
`;


export const Section = styled.section`
    position: relative;
    width: 100%;
    height:80vh;
    padding: 10px 20px 20px 20px;

    background-color: lightgray;
`;




export const SelectMultiple = styled.select`
    border: 3px solid blue;
    width:300px;
    box-sizing:border-box;
    border-radius:15px;
    
`;

export const StyledSpan = styled.span`
    font-size:10px;
    text-align: center;

`;