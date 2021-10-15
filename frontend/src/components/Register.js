import React from "react";
import axios from "axios";
import {useState, useRef} from "react";

import {UserInput, StyledForm, FormContainer, StyledSpan ,StyledFlexDiv, StyledFooter} from '../Styled/Styled';
import Button from 'react-bootstrap/Button';


const Register = ({history}) => {

    // State isEmail isValidPassword isComparePassword
    const [isEmail, setIsEmail] = useState(false);
    const [emailMsg, setEmailMsg] = useState("");

    const [isValidPassword, setIsValidPassword] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState("");

    const [isComparePassword, setIsComparePassword] = useState(false);
    const [compareMsg, setCompareMsg] = useState("");

    // element ref
    const inputIdRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const inputRepeatPasswordRef = useRef(null);


    // 이메일 형식 판별 함수
    const validateEmail = (email) => {
        
        // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reEmail.test(String(email).toLowerCase());
    
    }

    // 비밀번호 형식 판별 함수 (영문 숫자 특수문자 포함 8자 이상20)
    const validatePassword = (password) => {

        // 출처: https://seongilman.tistory.com/186 [SEONG];
        const rePassword = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
        return rePassword.test(String(password));

    }


    // 이벤트 핸들러
    const onChangeHandlerId = (event) => {
        event.preventDefault();
    
        // 아이디 입력조건 확인
        let tempCurrentIdValue = inputIdRef.current.value;
        
        if (tempCurrentIdValue === "") {
            setEmailMsg("");
            setIsEmail(false);
        } else {
            let tempIsValidEmail = validateEmail(tempCurrentIdValue);
            
            if (tempIsValidEmail === true) {
                setIsEmail(true);
                setEmailMsg("올바른 이메일 형식입니다.");
            } else {
                setIsEmail(false);
                setEmailMsg("올바른 이메일 형식을 완성해주세요.");
            }
        }
    

    }

    const onChangeHandlerPassword = (event) => {
        event.preventDefault();

        // 비밀번호 입력 조건(영문 숫자 특수문자 포함 10자 이상) 확인
        let tempCurrentPasswordValue = inputPasswordRef.current.value;

        if (tempCurrentPasswordValue === "") {
            setPasswordMsg("");
            setIsValidPassword(false);
        } else {
            let tempIsValidPassword = validatePassword(tempCurrentPasswordValue);
            
            if (tempIsValidPassword === true) {
                setIsValidPassword(true);
                setPasswordMsg("올바르게 입력하셨습니다.");
            } else {
                setIsValidPassword(false);
                setPasswordMsg("대소문자 영어, 숫자, 특수문자 포함 8 ~ 20자 사이에서 입력해주세요.");
                
            }
        }
        
    }


    const onChangeHandlerRepeatPassword = (event) => {
        event.preventDefault();
        
        // 반복입력받은 비밀번호와 비교
        // 일치 여부 표시
        let tempRepeatPassword = inputRepeatPasswordRef.current.value;
        
        if (isValidPassword === true) {
            if(tempRepeatPassword === "") {
                setIsComparePassword(false);
                setCompareMsg("");
            } else {
                let tempCurrentPasswordValue = inputPasswordRef.current.value;
                if (tempCurrentPasswordValue === tempRepeatPassword) {
                    setIsComparePassword(true);
                    setCompareMsg("비밀번호 일치");
                } else {
                    setIsComparePassword(false);
                    setCompareMsg("비밀번호 일치하지 않습니다.");
                }
            }
        } else {
            if (tempRepeatPassword !== "") {
                setIsComparePassword(false);
                setCompareMsg("먼저 올바른 비밀번호를 입력하세요.");
            } else {
                setIsComparePassword(false);
                setCompareMsg("");
            }
        }

    }

    // 회원가입 버튼 클릭 이벤트 처리
    const onClickHandlerRegisterSubmit = async () => {

        // 아이디 입력조건, 비밀번호 입력조건, 비밀번호 비교일치를 만족여부 확인
        // State isEmail isValidPassword isComparePassword
        if (isEmail && isValidPassword && isComparePassword) {

            // axios나 fetch를 사용하여 백엔드로 아이디(email), 비밀번호 전송
            // 회원가입 데이터 응답 처리
            
                await axios({
                    method: 'post',
                    url: 'api/register',
                    data: {email: inputIdRef.current.value, pw: inputRepeatPasswordRef.current.value},
                    //headers: {'Content-Type': 'application/json'},
                })
                    .then((response) => {
                        history.push("/Main");
                        alert("정상적으로 회원가입되었습니다.");

                    })
                    .catch((response) => {
                        alert("error");
                    })
            
        } else {
            alert("아이디 및 비밀번호 조건을 확인하세요");
        }

    }


    return (
        
        <div className="class-register">
            <FormContainer>
                <StyledForm>
                    회원가입

                <UserInput 
                    type="text" 
                    name="inputId" 
                    placeholder="ID"
                    ref={inputIdRef} 
                    onChange={onChangeHandlerId} >
                </UserInput>


                <StyledSpan>
                    {emailMsg}
                </StyledSpan>

                <br/>

                <UserInput 
                    type="password" 
                    name="inputPassword" 
                    placeholder="Password" 
                    ref={inputPasswordRef}
                    onChange={onChangeHandlerPassword}>
                </UserInput>

                <StyledSpan>
                    {passwordMsg}
                </StyledSpan>

                <br/>

                <UserInput 
                    type="password" 
                    name="repeatPasswordInput"
                    placeholder="Repeat Password"
                    ref={inputRepeatPasswordRef}
                    onChange={onChangeHandlerRepeatPassword}>
                </UserInput>

                <StyledSpan>
                    {compareMsg}
                </StyledSpan>

                <br/>

                <Button
                    type="text"
                    name="SubmitButton"
                    onClick={onClickHandlerRegisterSubmit}
                    >
                        회원가입
                </Button>
                </StyledForm>



            </FormContainer>

            <StyledFlexDiv>
                <StyledFooter>
                    Footer
                </StyledFooter>
            </StyledFlexDiv>
        </div>
        
    );
}

export default Register;