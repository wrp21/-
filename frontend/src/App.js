
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Survey from './components/Survey';

import {Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>예비 창업자를 위한 상권 분석 서비스</h1>
      <div>
        <ul>
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
          
        </ul>
        <Route path="/Main" component={Main} exact />
        <Route path="/Survey" component={Survey} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/Register" component={Register} exact />
      </div>
    </div>
  );
}

export default App;
