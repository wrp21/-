import { Link } from 'react-router-dom';
import styled from 'styled-components';

////// App.js : 상단 내비게이션 헤더 디자인 BEGIN //////////////
export const StyledAppDiv = styled.div`
    box-sizing:0;
    margin:0;
    display:flex;
    /* font-family:"consolas"; */
`;

export const StyledAppRouterDomLink = styled(Link)`
    text-decoration:none;
    color: azure;
`;

export const StyledAppHeader = styled.header`
    background-color:#333;
    height:60px;
    position:fixed;
    top:0;
    transition: top 0.1s ease-in-out;
    width: 100%;
`;

export const StyledAppNav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;

    top:0;
    padding: 8px 12px;
    height: 55px;

`;

export const StyledAppNavLogo = styled.div`
    font-size:20px;
    color:azure;
    list-style:none;
`;

export const StyledAppNavMenuUl = styled.ul`
    display: flex;
    list-style: none; /* ul에서 점을 없애줌*/
    padding-left: 0;
    margin:0;
    padding:0;
`;

export const StyledAppNavMenuLi = styled.li`
    padding: 8px 12px;
    background-color:#333;

    &:hover {
        background-color: #bd2f2f;
        border-radius:4px;
    }
`;

export const StyledAppNavToggleBtn = styled.a`
    
    display: none;
    /* position: fixed; */
    position: absolute;
    right: 32px;
    font-size: 24px;
    color: #bd2f2f;
`;

// .nav-up {
//     top: -60px;
// }

////// App.js : 상단 내비게이션 헤더 디자인 END //////////////


////// Main.js : 소개 페이지 디자인 BEGIN //////////////
export const StyledMainDiv = styled.div`
    width:auto;
    height:auto;
    /* height:50px; */
`;

export const Styledblank = styled.div`
    width:auto;
    height:60px;
`;

export const StyledMent = styled.div`
    display:block;
    width:auto;
    height:auto;
    background-color:greenyellow;
    text-align:center;
`;



////// Main.js : 소개 페이지 디자인 END //////////////



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