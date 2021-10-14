import React, { useEffect,useState } from 'react';
///////////////////////////////////////////////////////// location 사용
import { useLocation } from "react-router";
//////////////////////////////////////////////////////////
import Button from 'react-bootstrap/Button';
import {Footer,MainContainer,Section} from '../Styled/Styled';
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



    console.log("코로나 이후 데이터",data['post-covid']);
    console.log("코로나 이전 데이터",data['pre-covid']);


    console.log('지역/업종',userSelect);
///////////////////////////////////////////////////////////////////////////

    let closeDate;
    let closeCount;
    let preCovid;
    let category;
    let region;

    let postCovid;



    //userSelect[0]:업종
    if(userSelect[0] ==='미정'|| userSelect[0] === ''){
        category = Object.keys(data['post-covid']);

        preCovid = Object.values(data['pre-covid']);
        postCovid = Object.values(data['post-covid']);


    }

    //userSelect[1]: 지역
    else if(userSelect[1] === '미정' || userSelect[1] ==='' ){
        region = Object.keys(data['post-covid']);

        preCovid = Object.values(data['pre-covid']);
        postCovid = Object.values(data['post-covid']);

    }
    else{
        closeDate = Object.keys(data);
        closeCount = Object.values(data);
    }

    console.log("======데이터 확인 =======")
    console.log("지역 확인",region);
    console.log("업종 확인",category);
    console.log('코로나 이전',preCovid);
    console.log('코로나 이후',postCovid);

    console.log("폐업연월",closeDate);
    console.log("폐업건수",closeCount);

    

    useEffect(()=>{
        //buildBarChart();
        //buildChart();
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


    //let LineChart;
    // 라인 차트 그리기-> 업종/지역 모두 선택했을 때만

    /*
    const buildChart = () =>{
        var ctx = document.getElementById("LineChart").getContext("2d");

        if(typeof LineChart !== 'undefined') LineChart.destroy();

        LineChart = new Chart(ctx,{
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

                {(userSelect[0] === '미정' || userSelect[0]==='')&&
                    <div>
                        <div id="GraphContainer">
                            <p>코로나 이전</p>
                            <BarChart data={[category,preCovid]}></BarChart> 
                        </div>
                        <div id="GraphContainer">
                            <p>코로나 이후</p>
                            <BarChart data={[category,postCovid]}></BarChart> 
                        </div>
                    </div>
                }

                {(userSelect[1] ==='미정' || userSelect[1]==='')&&
                    <div>
                        <div id="GraphContainer">
                            <p>코로나 이전</p>
                            <BarChart data={[region,preCovid]}></BarChart> 
                        </div>
                        <div id="GraphContainer">
                            <p>코로나 이후</p>
                            <BarChart data={[region,postCovid]}></BarChart> 
                        </div>
                    </div>
                }

                {closeDate !== undefined &&
                    <div id="GraphContainer">    
                        <LineChart data={[closeDate,closeCount]}></LineChart>
                    </div>
                }


    

                
                <div id="BottomContainer">
                    <div id="ButtonContainer">
                        <Button onClick={toggleDiv1} style={{ marginLeft:"100px",marginRight:"30px", backgroundColor:'rgb(75,192,  192)'}}>추천업종 보러가기</Button>
                        <Button onClick={toggleDiv2} style={{marginRight:"30px",backgroundColor:'rgb(75,192,192)    '}}>추천지역 보러가기</Button>
                    </div>
                    

                    <div id='recommend'>
                        <div id='category'>
                            <h3>{userSelect[1]} 추천 업종입니다.</h3>
                            <BarChart data={[closeDate,closeCount]} ></BarChart>
                            
                        </div>
                        <div id='region'>
                            <h3>{userSelect[0]} 추천 지역입니다.</h3>
                            <BarChart data={[closeDate,closeCount]}></BarChart>
                            
                        </div>
                    </div>       
                </div>
                   
                

            </div>
        </div>
            
    );
    
}

export default Result;