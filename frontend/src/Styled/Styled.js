import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

////// App.js : 상단 내비게이션 헤더 디자인 BEGIN //////////////

export const StyledSpace = styled.div`
    height:60px;
`;
export const StyledAppDiv = styled.div`
    box-sizing:0;
    margin:0;
`;

export const StyledAppRouterDomLink = styled(NavLink)`
    text-decoration:none;
    color: azure;
    
`;

export const StyledAppHeader = styled.header`
    background-color:#2C2C32;
    height:50px;
    position:fixed;
    top:0;
    box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 33%);
    width: 100%;
    z-index:1;
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
    font-size:15px;
    color:azure;
    list-style:none;
`;

export const StyledAppNavMenuUl = styled.ul`
    display: flex;
    list-style: none; /* ul에서 점을 없애줌*/
    padding-left: 0;
    margin:0;
    padding:0;
    background-color:#2C2C32;
    
`;

export const StyledAppNavMenuLi = styled.li`
    padding: 8px 12px;
    background-color:#2C2C32;

    &:hover {
        background-color: #f44336;
        border-radius:4px;
    }
`;

export const StyledAppNavToggleBtn = styled.a`
    display: none;
    position: absolute;
    right: 32px;
    font-size: 24px;
    color: #bd2f2f;
`;

////// App.js : 상단 내비게이션 헤더 디자인 END //////////////


////// App.js : 메인페이지 영역 구별 //////////////
export const StyledLayoutMain = styled.div`
    /* display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:#2C2C32;
    height:80vh; */
    
    /* background-color: #333; */
    /* background-color: blueviolet; */
    
    
`;


////// App.js : 메인페이지 영역 구별 //////////////



////// App.js : 메인페이지 Footer //////////////

export const StyledFlexDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:100%;
    
`;

export const StyledFooter = styled.footer`

    padding-top: 25px;
    padding-bottom: 25px;

    display: flex;
    width: 100%;
    height:60px;
    bottom:0px;
    position:absolute;
    align-items:center;
    justify-content:center;

    background-color:#2C2C32;
    color:azure;

`;


////// App.js : 메인페이지 Footer //////////////


////// Main.js : 소개 페이지 디자인 BEGIN //////////////
export const StyledMainDiv = styled.div`

    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:#2C2C32;

    height:80vh;

`;

export const StyledIntroNav = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:20vh;
`;


export const StyledIntroDiv = styled.a`
    padding: 90px 90px;
    text-decoration:none;
    color:#444;

    &:hover {
        background-color:#f44336; 
        color:beige;
    }
`;

export const StyledIntroMenuCategory = styled.div`
    display:flex;
    justify-content:left;
    padding-top:60px;
    padding-bottom:60px;
    background-color:#F5F5F5;
    margin-left: 150px;
    box-shadow: 0px 3px 3px 1px rgb(0 0 0 / 33%);
    height:45vh;
    

    &:hover {
        background-color: #f44336;
        color:azure;
        transition : 0.5s;
    }
`;

export const StyledIntroMenuRegion = styled.div`
    display:flex;
    justify-content:center;
    padding-top:60px;
    padding-bottom:60px;
    height:45vh;

    &:hover {
        background-color: #008CBA;
        color:beige;
        transition : 0.5s;
    }
`;

export const StyledIntroMenuBoth = styled.div`
    display:flex;
    justify-content:right;
    padding-top:60px;
    padding-bottom:60px;
    margin-right: 150px;
    background-color:#F5F5F5;
    height:50vh;
    box-shadow: 0px 3px 3px 3px rgb(0 0 0 / 33%);

    &:hover {
        background-color: green;
        color:azure;
        transition : 0.5s;
    }
`;

export const Styledblank = styled.div`
    align-items:center;
    height:60px;
`;

export const StyledInlineDiv = styled.div`
    display:inline-block;
    justify-content:center;
    text-align:left;
    align-items:center;
    padding: 20px;
    margin-left:10px;

`;

export const StyledTitleMent = styled.div`
    display:inline;
    color:azure;
    font-size:30px;
`;

export const StyledMent = styled.div`
    display:flex;
    color:azure;
    text-align:center;
`;

export const StyledInlineDivImg = styled.div`
    display:inline-flex;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    margin-left:50px;
    margin-right:50px;
`;


export const StyledWrapDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

////// Main.js : 소개 페이지 디자인 END //////////////



export const FormContainer = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:#2C2C32;
    height:80vh;

    color:azure;

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