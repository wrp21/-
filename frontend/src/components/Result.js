import React, { useEffect,useState } from 'react';
///////////////////////////////////////////////////////// location 사용
import { useLocation } from "react-router";
//////////////////////////////////////////////////////////
import Button from 'react-bootstrap/Button';
import {Footer,MainContainer,Section} from '../Styled/Styled';
import { BarChart } from './BarChart';

const Result = ({history})=>{
/////////////////////////////////////////////////////////////////////// location 사용
    const location = useLocation();
    const data = location.state.responseResultData;

    const userSelect = location.state.userSelect;
    console.log('데이터 확인',data);
    console.log('지역/업종',userSelect);
///////////////////////////////////////////////////////////////////////////

    const closeDate = Object.keys(data);
    const closeCount = Object.values(data);
    




    //업종
    const toggleDiv1=()=>{

        const div = document.getElementById('category');

        if(div.style.display === 'none'){
            div.style.display='block';
        }
        else{
            div.style.display = 'none';
        }

        
        scrollDown();
    }

    //지역
    const toggleDiv2=()=>{


        const div = document.getElementById('region');

        if(div.style.display === 'none'){
            div.style.display='block';
        }
        else{
            div.style.display = 'none';
        }

        scrollDown()
    }

    // 버튼 클릭시 스크롤 아래로 내리기
    const scrollDown = ()=>{
        document.documentElement.scrollTop = document.body.scrollHeight;
    };

    return(
        <div>
            <h1>결과 페이지</h1>

            <MainContainer>
                <Section>
                    <article>
                        
                        <div>
                            <h2>{userSelect[1]} 지역 {userSelect[0]} 업종 폐업정보 </h2>
                            <BarChart data={[closeDate,closeCount]}></BarChart>
                        </div>
                        
                        <p>본문</p>
                    </article>
                </Section>
           
                <Footer>    
                    <div>
                        
                        <Button onClick={toggleDiv1} style={{paddingRight:"10px"}}>추천업종 보러가기</Button>
                        <Button onClick={toggleDiv2} style={{paddingLeft:"10px"}}>추천지역 보러가기</Button>

                        <div id='category'>
                            <h3>{userSelect[1]} 추천 업종입니다.</h3>
                            <BarChart data={[closeDate,closeCount]}></BarChart>
                            
                        </div>
                        <div id='region'>
                            <h3>{userSelect[0]} 추천 지역입니다.</h3>
                            <BarChart data={[closeDate,closeCount]}></BarChart>
                            
                        </div>
                    </div>
                    

                </Footer>
            </MainContainer>
        </div>
    );
    
}

export default Result;