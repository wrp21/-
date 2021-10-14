import React from "react";
import Button from 'react-bootstrap/Button';

import { FormContainer, StyledForm, SelectMultiple, StyledSpan, StyledIntroNav, StyledFlexDiv, StyledFooter, } from "../Styled/Styled";
import { useState, useRef } from "react";
import axios from "axios";


const Survey = ({history, location}) => {

    const categoryRef = useRef(null);
    const regionRef = useRef(null);

    const [regionList, setRegionList] = useState([
        '중구', '금천구', '송파구', '관악구', '중랑구',
        '동작구', '성동구', '강북구', '양천구',
        '서대문구', '구로구', '성북구', '은평구',
        '영등포구', '서초구', '광진구', '강동구', '마포구', 
        '용산구', '강남구', '강서구', '동대문구', '노원구',
        '도봉구', '종로구', '미정'
    ]);

    const [categoryList, setCategoryList] = useState([
        '경양식', '기타', '김밥(도시락)', '까페', '분식', '뷔페식',
        '식육(숯불구이)', '일식', '정종/대포집/소주방', '중국식',
        '통닭(치킨)', '패밀리레스트랑', '패스트푸드', '한식',
        '외국음식전문점(인도태국등)', '횟집', '미정'
    ]);


    const spreadList = (props) => {
        const lst = props.map((string) => {
            return <option key={string}>{string}</option>
        });

        return lst;
    }

    const spreadListH1 = (props) => {
        const lst = props.map((string) => {
            return <h1 key={string}>{string}</h1>
        });

        return lst;
    }

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
        } else if(tempValue === "미정" || tempValue === "") {
            setCategoryValue("");
        }

    }

    const onChangeHandlerSelectRegion = (event) => {
        event.preventDefault();
        let tempValue = regionRef.current.options[regionRef.current.selectedIndex].text;
        setRegionValue(tempValue);

        if (tempValue !== "") {
            setRegionMsg(tempValue  + "을 선택하셨습니다.");
        } else if( tempValue === "미정" || tempValue === "") {
            setRegionValue("");
        }
    }


    const onClickHandlerSurveyButton = async (event) => {
        event.preventDefault();
        
        //history.push("/Loading");

        // 테스트를 위한 axios
        let tempRegionValue = regionValue;
        let tempCategoryValue = categoryValue;
        
        let paramValue = {};

        console.log(tempRegionValue);
        console.log(tempCategoryValue);



        if ((tempCategoryValue === "" || tempCategoryValue === "미정") && (tempRegionValue === "" || tempRegionValue === "미정")) {
            alert("업종과 지역 둘중에 하나 이상 선택해야 합니다");
        } else {

            if (tempCategoryValue === "" || tempCategoryValue === "미정") {
                paramValue = {region: tempRegionValue}
            } else if (tempRegionValue === "" || tempRegionValue === "미정") {
                paramValue = {category: tempCategoryValue}
            } else {
                paramValue = {region: tempRegionValue, category: tempCategoryValue}
            }

            console.log(paramValue)
        

            await axios({
                method: 'get',                                 // 수정 필요 => 'get'
                url: 'http://172.18.84.110:5000/api/result',    // 수정 필요
                params: paramValue,
                headers: {'Content-Type': 'application/json'},
            })
            .then((response) => {
                console.log(response);
                console.log(response.data);
                history.push({
                    pathname: "/Result",
                    state: {
                        responseResultData: response.data,
                        userSelect:[categoryValue,regionValue]

                    }
                });
                alert("pass");
            })
            .catch((response) => {
                console.log(response);
                history.push("/Survey");
                alert("error");
            })
        }
        

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
                        
                        {spreadList(categoryList)}
                        
                        
                    </SelectMultiple>

                    <br/>

                    <label>2. 어느 지역에 창업하실 계획인가요?</label>
                    <SelectMultiple 
                        name="region"
                        ref={regionRef}
                        onChange={onChangeHandlerSelectRegion}
                        multiple
                    >
                    
                        {spreadList(regionList)}

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

        {/* <StyledIntroNav>ss</StyledIntroNav>
        <StyledIntroNav>ss</StyledIntroNav>
        <StyledIntroNav>ss</StyledIntroNav>

        <StyledFlexDiv>
            <StyledFooter>
                Footer

            </StyledFooter>
        </StyledFlexDiv> */}


        </div>
        
    );

}

export default Survey;