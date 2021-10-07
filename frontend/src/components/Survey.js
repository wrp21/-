import React from "react";
import Button from 'react-bootstrap/Button';

import { FormContainer, StyledForm, SelectMultiple, StyledSpan } from "../Styled/Styled";
import { useState, useRef } from "react";
import axios from "axios";


const Survey = ({history}) => {
    
    const categoryRef = useRef(null);
    const regionRef = useRef(null);

    const [categoryValue, setCategoryValue] = useState("");
    const [regionValue, setRegionValue] = useState("");
    const [categoryMsg, setCategoryMsg] = useState("");
    const [regionMsg, setRegionMsg] = useState("");


    const onChangeHandlerSelectCategory = (event) => {
        event.preventDefault();
        let tempValue = categoryRef.current.options[categoryRef.current.selectedIndex].text;
        setCategoryValue(tempValue);

        if(tempValue !== "") {
            setCategoryMsg(tempValue + "을 선택하셨습니다.");
        }

    }

    const onChangeHandlerSelectRegion = (event) => {
        event.preventDefault();
        let tempValue = regionRef.current.options[regionRef.current.selectedIndex].text;
        setRegionValue(tempValue);

        if (tempValue !== "") {
            setRegionMsg(tempValue  + "을 선택하셨습니다.");
        }
    }


    const onClickHandlerSurveyButton = async (event) => {
        event.preventDefault();
        // alert(regionValue + categoryValue);
        history.push("/Loading");

        // 테스트를 위한 axios
        await axios({
            method: 'post',                      // 수정 필요 => 'get'
            url: 'http://127.0.0.1:5000/result', // 수정 필요
            data:{category: categoryValue, region: regionValue},
            headers: {'Content-Type': 'application/json'},
        })
        .then((response) => {
            history.push("/Result");
        })
        .catch((response) => {
            history.push("/Survey");
            alert("error");
        })

    }
    

    return (
        <div className="class-survey">
            
            <FormContainer>
                <StyledForm>
                    <label>1. 어떤 업종을 창업하실 계획인가요?</label>
                    <SelectMultiple 
                        name="category"
                        ref={categoryRef}
                        onChange={onChangeHandlerSelectCategory}
                        multiple
                    >
                        <option>업종1</option>
                        <option>업종2</option>
                        <option>업종3</option>
                        <option>업종4</option>
                        <option>업종 미정</option>
                        
                        
                    </SelectMultiple>

                    <br/>

                    <label>2. 어느 지역에 창업하실 계획인가요?</label>
                    <SelectMultiple 
                        name="region"
                        ref={regionRef}
                        onChange={onChangeHandlerSelectRegion}
                        multiple
                    >
                        <option>지역1</option>
                        <option>지역2</option>
                        <option>지역3</option>
                        <option>지역4</option>
                        <option>지역 미정</option>

                    </SelectMultiple>
                    
                    <br/>
                    <br/>

                    <StyledSpan>
                        {categoryMsg}
                    </StyledSpan>

                    <br/>

                    <StyledSpan>
                        {regionMsg}
                    </StyledSpan>

                    <br/>
                    <br/>

                    <Button
                        type="text"
                        name="surveyButton"
                        onClick={onClickHandlerSurveyButton}
                        >분석하기
                    </Button>

                </StyledForm>
            </FormContainer>


        </div>
    );

}

export default Survey;