
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Survey from './components/Survey';
import Result from './components/Result';
import Loading from './components/Loading';


import { Route, Switch, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars} from "react-icons/fa";


import {  StyledAppDiv, StyledAppHeader,
          StyledAppNav, StyledAppNavLogo, 
          StyledAppRouterDomLink, StyledAppNavToggleBtn, StyledAppNavMenuUl, StyledFlexDiv, 
          StyledAppNavMenuLi, StyledFooter, StyledSpace, StyledLayoutMain, StyledLayoutSurvey,
          StyledLayoutLogin, StyledLayoutRegister, StyledLayoutLoading, 
          StyledLayoutResult, StyledInlineDiv } from './Styled/Styled';




function App({history}) {
  
  const location = useLocation();
  
  return (

    <StyledAppDiv className="App">

      <StyledAppHeader>
        <StyledAppNav>    {/* class="navbar" id="nav_bar */}
          <StyledAppNavLogo>  {/* class="navbar__logo" */}
            <li>
              <StyledAppRouterDomLink to="/Main">상권 분석 서비스</StyledAppRouterDomLink>
            </li>
          </StyledAppNavLogo>

          <StyledAppNavMenuUl>  {/* class="navbar__menu" */}
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Main">소개</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Survey">분석하기</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Login">로그인</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
              <StyledAppNavMenuLi>
                <StyledAppRouterDomLink to="/Register">회원가입</StyledAppRouterDomLink>
              </StyledAppNavMenuLi>
          </StyledAppNavMenuUl>
          <StyledAppNavToggleBtn href="#">  {/* class="navbar__toggleBtn" */}
            <FaBars />
          </StyledAppNavToggleBtn>
        </StyledAppNav>
      </StyledAppHeader>

      {/* <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>  
          <Switch location={location}> */}
            <StyledLayoutMain>
                <Route path="/" component={Main} exact />
                <Route path="/Main" component={Main} exact />
                <Route path="/Survey" component={Survey} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/Register" component={Register} exact />
                <Route path="/Loading" component={Loading} exact />
                <Route path='/Result' component={Result} exact/>
                
            </StyledLayoutMain>
          {/* </Switch>
        </CSSTransition>
      </TransitionGroup> */}

      
      
        
            
        
      

    </StyledAppDiv>
  );
}
// 코로나 이전 이후 폐업한 건수 시각화 막대그래프
// 지역별로 개업중인 상점 막대그래프 
export default App;
