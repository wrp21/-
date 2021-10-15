
import React, {useState} from "react";
import { FormContainer,StyledForm,UserInput, StyledFlexDiv, StyledFooter, } from "../Styled/Styled";
import Button from 'react-bootstrap/Button';
import { fetchLogin } from "./service";


const Login = ({history}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) =>{
        setId(event.target.value);
    }

    const onPasswordHandler = (event)=>{
        setPassword(event.target.value);
    }

    const onClickLogin = async() =>{
        console.log('click login');
        console.log('ID:',id);
        console.log("PW",password);

        try{
            const user = await fetchLogin({id,password});

            history.push('/');
        }
        catch(error){
            window.alert(error);

            history.push("/");
        }
      
    };


    return(
        <>
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

            <StyledFlexDiv>
                <StyledFooter>
                    Footer
                </StyledFooter>
            </StyledFlexDiv>
        </>
    )
}

export default Login;


