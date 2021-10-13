import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

////// App.js : 상단 내비게이션 헤더 디자인 BEGIN //////////////

export const StyledSpace = styled.div`
    /* background-color:black; */
    height:60px;
`;
export const StyledAppDiv = styled.div`

    box-sizing:0;
    margin:0;
    /* font-family:"consolas"; */
`;

export const StyledAppRouterDomLink = styled(NavLink)`
    text-decoration:none;
    color: azure;
    
`;

export const StyledAppHeader = styled.header`
    /* background-color:#333; */
    background-color:#2C2C32;
    height:50px;
    position:fixed;
    top:0;
    box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 33%);
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
    /* background-color:#333; */
    background-color:#2C2C32;

    &:hover {
        background-color: #f44336;
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


export const StyledLayoutRegister = styled.div`
    background-color:lightgreen;
    height:1000px;
`;

export const StyledLayoutLoading = styled.div`
    background-color:khaki;
    height:1000px;
`;

export const StyledLayoutResult = styled.div`
    background-color:lightpink;
    height:1000px;
`;

export const StyledLayoutFooter = styled.div`
    background-color:lightsalmon;
    height:1000px;
`;

////// App.js : 메인페이지 영역 구별 //////////////



////// App.js : 메인페이지 Footer //////////////

export const StyledFlexDiv = styled.div`
    display:flex;
`;
export const StyledFooter = styled.footer`
    display:inline-block;
    /* position:absolute; */
    left:0;
    bottom:0;
    right:0;
    width:100%;
    /* width:100%;
    left:0px;
    bottom:0px;
    height:60px; */
    background-color:#2C2C32;
    color:azure;
    padding-top: 25px;
    padding-bottom: 25px;
    
`;


////// App.js : 메인페이지 Footer //////////////


////// Main.js : 소개 페이지 디자인 BEGIN //////////////
export const StyledMainDiv = styled.div`
    /* display: flex;
    justify-content: center;
    align-items:center; */

    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:#2C2C32;
    height:80vh;
    /* width:auto;
    height:auto; */
    
    /* height:50px; */
`;

export const StyledIntroNav = styled.div`
    display:flex;
    /* background-color:lightcoral; */
    align-items:center;
    justify-content:center;

    height:20vh;
`;

export const StyledIntroUl = styled.a`
    
    

    
`;

export const StyledIntroDiv = styled.a`
    padding: 70px 70px;
    text-decoration:none;
    color:#444;

    &:hover {
        /* background-color:khaki;    */
        /* background-color:#f4f4f4; */
        /* background-color: #008CBA;  Blue */
        /* background-color: #f44336;  Red */ 
        /* background-color: #e7e7e7;  Gray  
        background-color: #555555; Black   */

        background-color:#f44336;
        color:beige;
    }
`;

export const StyledIntroMenu = styled.div`
    padding-top:60px;
    padding-bottom:60px;
    background-color:#F5F5F5;
    height:40vh;
`;

export const StyledIntroMenuWhite = styled.div`
    padding-top:60px;
    padding-bottom:60px;
    height:40vh;
`;

export const Styledblank = styled.div`
    /* width:auto; */
    align-items:center;
    
    height:60px;
`;

export const StyledInlineDiv = styled.div`
    /* position:relative; */
    display:inline;
    justify-content:center;
    text-align:center;
    align-items:center;
    padding-right: 10px;
    
    /* left:100%; */
`;

export const StyledTitleMent = styled.div`
    display:inline;
    color:azure;
    font-size:30px;
`;

export const StyledMent = styled.div`
    display:flex;
    /* width:1000px;
    height:1000px; */
    color:azure;
    /* background-color:greenyellow; */
    text-align:center;
`;



////// Main.js : 소개 페이지 디자인 END //////////////



export const FormContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; */

    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:#2C2C32;
    height:80vh;

    color:azure;

    /* margin-top:100px; */
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