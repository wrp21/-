
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Survey from './components/Survey';
import Result from './components/Result';
import Loading from './components/Loading';


import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars} from "react-icons/fa";


import {  StyledAppDiv, StyledAppHeader,
          StyledAppNav, StyledAppNavLogo, 
          StyledAppRouterDomLink, StyledAppNavToggleBtn, StyledAppNavMenuUl, 
          StyledAppNavMenuLi, StyledLayoutMain, 
         } from './Styled/Styled';




function App({history}) {
  

  
  return (

    <StyledAppDiv className="App">

      <StyledAppHeader>
        <StyledAppNav>   
          <StyledAppNavLogo>
            <li>
              <StyledAppRouterDomLink to="/Main" smooth={true}>상권 분석 서비스</StyledAppRouterDomLink>
            </li>
          </StyledAppNavLogo>

          <StyledAppNavMenuUl>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Main" >소개</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Survey" >분석하기</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Login" >로그인</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Register" >회원가입</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
          </StyledAppNavMenuUl>
          <StyledAppNavToggleBtn href="#">
            <FaBars />
          </StyledAppNavToggleBtn>
        </StyledAppNav>
      </StyledAppHeader>


            <StyledLayoutMain>
                <Route path="/" component={Main} exact />
                <Route path="/Main" component={Main} exact />
                <Route path="/Survey" component={Survey} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/Register" component={Register} exact />
                <Route path="/Loading" component={Loading} exact />
                <Route path='/Result' component={Result} exact/>
            </StyledLayoutMain>

    </StyledAppDiv>
  );
}

export default App;
