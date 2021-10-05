
import React, {useState} from "react";

const Login = ({history}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitLoginInfo = async (e) => {
        e.preventDefault();

    }

    const handleOnChangeUserId= (e) => {
        setId(e.target.value);
    }

    const handleOnChangeUserPassword = (e) => {
        setPassword(e.target.value);
        
    }

    return (
        <div className="login">
            <p>Login</p>
            <input type="text" name="user_id" placeholder="id" id="login-id" onChange={handleOnChangeUserId}></input>  
            <input type="password" name="user_password" placeholder="password" id="loginpage-password-input" onChange={handleOnChangeUserPassword} ></input>
            <button type="button" id="login" onClick={onSubmitLoginInfo}>로그인</button>
            <button type="button" onClick={() => {history.push("/Register");}}>회원가입</button>
        </div>
            
    
    );
}

export default Login;


