
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Survey from './components/Survey';
import Result from './components/Result';

import {Link, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {MainHeadContainer,Title,NaviContainer} from './Styled/Styled';

function App() {
  return (
    <div className="App">
      <MainHeadContainer>
        <Title>예비 창업자를 위한 상권 분석 서비스</Title>
        <div>
          <NaviContainer>
            <nav>
              <li>
                <Link to="/Main">메인페이지</Link>
              </li>
              <li>
                <Link to="/Survey">분석하기</Link>
              </li>
              <li>
                <Link to="/Login">로그인</Link>
              </li>
              <li>
                <Link to="/Register">회원가입</Link>
              </li>

            </nav>
          </NaviContainer>
        </div>
      </MainHeadContainer>
      <div>
          <Route path="/Main" component={Main} exact />
          <Route path="/Survey" component={Survey} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path='/Result' component={Result} exact/>
      </div>
    </div>
  );
}

export default App;
