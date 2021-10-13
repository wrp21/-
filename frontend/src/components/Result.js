import React, { useEffect,useState } from 'react';
///////////////////////////////////////////////////////// location 사용
import { useLocation } from "react-router";
//////////////////////////////////////////////////////////
import Button from 'react-bootstrap/Button';
import {Footer,MainContainer,Section, StyledSpace, StyledFlexDiv, StyledFooter,} from '../Styled/Styled';
import { BarChart } from './BarChart';




// 스타일 관련
import '../Styled/result.css';
import { LineChart } from './LineChart';

import Chart from 'chart.js/auto';

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

    useEffect(()=>{
        //buildBarChart();
        buildChart();
    },[])
    




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


    // 라인 차트 그리기
    const buildChart = () =>{
        var ctx = document.getElementById("LineChart").getContext("2d");

        //if(typeof LineChart !== 'undefined') LineChart.destroy();

        let LineChart = new Chart(ctx,{
            type:'line',
            data:{
                labels:closeDate,
                datasets:[{
                    label:'폐업 추이',
                    data:closeCount,
                    fill:false,
                    borderColor:'rgb(75,192,192)',
                    tension:0.1
                }]
            },
        });
    }

    // 바 차트 그리기
    
    /*
    const buildBarChart =()=>{
        var ctx = document.getElementById("MyBarChart").getContext("2d");

        let MyBarChart = new Chart(ctx,{
            type:'bar',
            data:{
                labels:closeDate,
                datasets:[{
                    label:'폐업 추이',
                    data:closeCount,
                    fill:false,
                    backgroundColor:'rgb(75,192,192)',
                    tension:0.1
                }]
            },

        });
    }
    */
    
    return(
        <div>

            

            
            <div id="MainContainer">
                <div id="MainContainerHead">
                    <h3><strong>{userSelect[1]}</strong> 지역 <strong>{userSelect[0]}</strong> 업종 폐업정보 </h3>
                </div>

                <div id="GraphContainer">
                    <p>코로나 이전</p>
                    <BarChart data={[closeDate,closeCount]}></BarChart> 
                </div>

                <div id="GraphContainer">
                    <p>코로나 이후</p>
                    <BarChart data={[closeDate,closeCount]}></BarChart> 
                </div>



                <div id="MainContainerHead">
                    <h3><strong>{userSelect[1]}</strong> 지역 <strong>{userSelect[0]}</strong> 업종 폐업 추이 </h3>
                </div>

                <div>
                    <canvas id="LineChart" width="1000" height="400"/>
                </div>

                <div>
                    <canvas id="MyBarChart"></canvas>
                </div>

                <footer>
                    <div>
                        <Button onClick={toggleDiv1} style={{paddingRight:"10px", backgroundColor:'rgb(75,192,192)'}}>추천업종 보러가기</Button>
                        <Button onClick={toggleDiv2} style={{paddingLeft:"10px",backgroundColor:'rgb(75,192,192)'}}>추천지역 보러가기</Button>

                        <div id='recommend'>
                            <div id='category'>
                                <h3>{userSelect[1]} 추천 업종입니다.</h3>
                                <BarChart data={[closeDate,closeCount]}></BarChart>
                            
                            </div>
                            <div id='region'>
                                <h3>{userSelect[0]} 추천 지역입니다.</h3>
                                <BarChart data={[closeDate,closeCount]}></BarChart>
                            
                            </div>
                        </div>

                        
                    </div>
                   
                </footer>

            </div>
        </div>
            
    );
    
}

export default Result;