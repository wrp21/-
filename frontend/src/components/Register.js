import React from "react";
import {useState} from "react";
import styled from "styled-components";

/* 회원가입 컴포넌트 Register

yarn add axios
yarn add react-router-dom
yarn add styled-components

기능
1. 아이디(email) 패스워드 입력, 전송
    1.1 아이디 입력
        - 아이디를 입력받고 registerId State에 저장
            - 아이디 입력조건? (이메일 형식인가?) 확인
            - 입력조건 일치 여부 표시

    1.2 패스워드 입력
        - 비밀번호를 입력받고 registerPassword에 저장
            - 비밀번호 입력 조건(영문 숫자 포함 8 ~ 15자?) 확인
        - 반복입력 registerRepeatPassword에 저장
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
const StyledRegister = styled.p`
    color: black;
    background-color:green;
    font-size:30px;
    width: 200px;
    text-align: center;
`;


const Register = ({history}) => {

    // State
    const [registerId, setRegisterId] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");


    // 이벤트 핸들러
    const onChangeHandlerId = (event) => {
        setRegisterId(event.target.value);

        // 아이디 입력조건 확인

    }

    const onChangeHandlerPassword = (event) => {
        setRegisterPassword(event.target.value);

        // 비밀번호 입력 조건(영문 숫자 포함 8 ~ 15자??) 확인
    }


    const onChangeHandlerRepeatPassword = (event) => {
        setRegisterRepeatPassword(event.target.value);

        // 반복입력받은 비밀번호와 비교
        // 일치 여부 표시

    }

    // 회원가입 버튼 클릭 이벤트 처리
    const onClickHandlerRegisterSubmit = () => {

        // 아이디 입력조건, 비밀번호 입력조건, 비밀번호 비교일치를 만족여부 확인


        // axios나 fetch를 사용하여 백엔드로 아이디(email), 비밀번호 전송
        

        // 회원가입 데이터 응답 처리
        /*
        try {
            let response = await axios.post(
                'http://localhost:5000/login',
                {
                    data: {
                        id:id,
                        password:password
                    }
                }
            );
            
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        */

        history.push("/Main");
        alert("정상적으로 회원가입되었습니다.")

    }


    return (
        
        <div className="class-register">
            <StyledRegister>
                회원가입
            
            <input 
                type="text" 
                name="register-id" 
                placeholder="ID" 
                onChange={onChangeHandlerId} >
            </input>

            <input 
                type="password" 
                name="register-password" 
                placeholder="Password" 
                onChange={onChangeHandlerPassword}>
            </input>

            <input 
                type="password" 
                name="register-repeat-password"
                placeholder="Repeat Password"
                onChange={onChangeHandlerRepeatPassword}>
            </input>

            <button
                type="text"
                name="register-submit-button"
                onClick={onClickHandlerRegisterSubmit}
                >
                    회원가입
            </button>
            </StyledRegister>

        </div>
        
    );
}

export default Register;
