import React from "react";
import axios from "axios";
import {useState, useRef} from "react";
import styled from "styled-components";

import {UserInput, StyledForm, FormContainer, StyledSpan ,StyledFlexDiv, StyledFooter,} from '../Styled/Styled';
import Button from 'react-bootstrap/Button';

/* 회원가입 컴포넌트 Register

yarn add axios
yarn add react-router-dom
yarn add styled-components
yarn add react-bootstrap
yarn add bootstrap
yarn add react-chartjs-2 chart.js
yarn add react-icons
yarn add react-scroll
yarn add react-transition-group
yarn add react-reveal

기능
1. 아이디(email) 패스워드 입력, 전송
    1.1 아이디 입력
        - 아이디를 입력받고 useRef을 사용하여 엘리먼트의 현재 입력되어있는 아이디 값을 가져옴
            - 아이디 입력조건? (이메일 형식인가?) 확인
            - 입력조건 일치 여부 표시

    1.2 패스워드 입력
        - 비밀번호를 입력받고 useRef을 사용하여 엘리먼트의 현재 입력되어있는 비밀번호 값을 가져옴
            - 비밀번호 입력 조건(영문 숫자 특수문자 포함 10자 이상) 확인
        - useRef을 사용하여 엘리먼트의 현재 입력되어있는 비밀번호 값을 가져옴
        - 반복입력받은 비밀번호와 비교
            - 일치 여부 표시

    1.3 회원가입 데이터 전송(회원가입 버튼 클릭시 발생 이벤트)
        - 아이디 입력조건, 비밀번호 입력조건, 비밀번호 비교일치를 만족여부 확인
        - axios나 fetch를 사용하여 백엔드로 아이디(email), 비밀번호 전송
        - json 형식
    

2. 회원가입 데이터 응답 처리

    - 응답 데이터(Response) 종류
        - no data
        - 201 : success
        - 409 : duplicate_id
        - 500 : db error
    
    2.1 response : 201
        - 회원가입 성공 메세지 표시
        - 메인 페이지로 이동

    2.2 response : 409
        - 회원가입 실패 표시("이미 존재하는 계정입니다")
        - 텍스트 엘리먼트 값 비우기 
        - 페이지 이동 없음
    
    2.3 response : 500
        - 회원가입 실패 표시("db error")
        - 텍스트 엘리먼트 값 비우기 
        - 페이지 이동 없음

디자인 : styled-component?

*/

// styled-component p 태그
/*
const StyledRegister = styled.p`
    color: black;
    background-color:green;
    font-size:30px;
    width: 200px;
    
    text-align: center;
`;
*/




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
                    url: 'http://127.0.0.1:5000/register',
                    data: {email: inputIdRef.current.value, pw: inputRepeatPasswordRef.current.value},
                    //headers: {'Content-Type': 'application/json'},
                })
                    .then((response) => {
                        console.log(response);
                        history.push("/Main");
                        alert("정상적으로 회원가입되었습니다.");

                    })
                    .catch((response) => {
                        console.log(response);
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