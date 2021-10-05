
import React, {useState} from "react";
import { FormContainer,StyledForm,UserInput } from "../Styled/Styled";
import Button from 'react-bootstrap/Button';


const Login = ({history}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) =>{
        setId(event.target.value);
    }

    const onPasswordHandler = (event)=>{
        setPassword(event.target.value);
    }

    const onClickLogin = () =>{
        console.log('click login');
        console.log('ID:',id);
        console.log("PW",password);

        // 서버 통신
        /*
            1. post로 아이디/ 비밀번호 체크
             
            2. 로그인 성공하면 메인페이지로 이동
            
        */

        // 성공하면 메인 페이지 이동


    }


    return(
        <FormContainer>
            <StyledForm>
                
                <label>ID</label>
                <UserInput type="id" value={id} onChange={onIdHandler} required/>
                <label>Password</label>
                <UserInput type="password" value={password} onChange={onPasswordHandler} required/>
                
                <br/>
 
                <Button onClick={onClickLogin} disabled={(id==='' || password ==='')}>로그인</Button>
            </StyledForm>
        </FormContainer>
    )
}

export default Login;


