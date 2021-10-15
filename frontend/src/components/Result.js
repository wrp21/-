import React, { useEffect,useState } from 'react';
///////////////////////////////////////////////////////// location 사용
import { useLocation } from "react-router";
//////////////////////////////////////////////////////////
import Button from 'react-bootstrap/Button';







// 스타일 관련
import '../Styled/result.css';
import { LineChart } from './LineChart';
import { DualBarChart } from './DualBarChart';
import { BarChart } from './BarChart';

import Chart from 'chart.js/auto';
import axios from 'axios';




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


    // 지역-업종 둘다 선택했을 때
    let closeDate; //폐업연월
    let closeCount; //폐업건수

    // 지역 or 업종 둘중 하나만 선택했을 경우
    let preCovid;
    let postCovid;
    let category;
    let region;



    let regionCovid;
    let categoryCovid;

    const [regionListData, setRegionListData] = useState([]);
    const [categoryListData, setCategoryListData] = useState([]);

    const getData = async()=>{

        const response = await axios.all([
            await axios({
                method: 'get',                                 
                url: 'http://192.168.0.10:5000/api/result',    
                params: {category:userSelect[0]},
                headers: {'Content-Type': 'application/json'},
            }),
            await axios({
                method: 'get',                                 
                url: 'http://192.168.0.10:5000/api/result',    
                params: {region:userSelect[1]},
                headers: {'Content-Type': 'application/json'},
            })
        ]);

        console.log('response',response);
        console.log('response.data0',response[0].data);
        console.log('response.data1',response[1].data);

        regionCovid = response[0].data;
        categoryCovid = response[1].data;


        console.log('regionCovid',regionCovid);
        console.log('categoryCovid',categoryCovid);

        setRegionListData([Object.keys(regionCovid['pre-covid']),Object.values(regionCovid['pre-covid']),Object.values(regionCovid['post-covid'])]);

        setCategoryListData([Object.keys(categoryCovid['pre-covid']),Object.values(categoryCovid['pre-covid']),Object.values(categoryCovid['post-covid'])]);


    };
   
    //userSelect[0]:업종
    // 업종 선택 안한 경우-> 지역만 선택한 경우
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
    // 둘다 선택했을 경우
    else{
 
        closeDate = Object.keys(data);
        closeCount = Object.values(data);

        getData();

    }
    
    //업종 추천 버튼 눌렀을 때
    const toggleDiv1=()=>{

        const categoryDiv = document.getElementById('category');
        const regionDiv = document.getElementById('region');
        
        if(categoryDiv.style.display === 'none' || regionDiv.style.display ==='block'){
            regionDiv.style.display='none';
            categoryDiv.style.display='block';

        }
        else{
            categoryDiv.style.display = 'none';
        }
        
        scrollDown();
    }

    //지역추천 버튼 눌렀을 때
    const toggleDiv2=()=>{
        
        const regionDiv = document.getElementById('region');
        const categoryDiv = document.getElementById('category');
        
        if(regionDiv.style.display === 'none' || categoryDiv.style.disabled ==='block'){
            categoryDiv.style.display='none';
            regionDiv.style.display='block';
        }
        else{
            regionDiv.style.display = 'none';
        }

        scrollDown()
        
    }

    // 버튼 클릭시 스크롤 아래로 내리기
    const scrollDown = ()=>{
       document.documentElement.scrollTop = document.body.scrollHeight;
        
    }

    
    return(
        <div>
            
            <div id="MainContainer">
                <div id="MainContainerHead">
                    <h3><strong>{userSelect[1]}</strong> 지역 <strong>{userSelect[0]}</strong> 업종 폐업정보 </h3>
                </div>


                {(userSelect[0] === '미정' || userSelect[0]==='')&&

                    <div>
                        <div id="GraphContainer">
                            <h3 >코로나 이전</h3>
                            <BarChart data={[category,preCovid]}></BarChart> 
                        </div>
                        <div id="GraphContainer">
                            <h3>코로나 이후</h3>
                            <BarChart data={[category,postCovid]}></BarChart> 
                        </div>
                    </div>
                }


                {(userSelect[1] ==='미정' || userSelect[1]==='')&&

                    <div>
                        <div id="GraphContainer">
                            <h3>코로나 이전</h3>
                            <BarChart data={[region,preCovid]}></BarChart> 
                        </div>

                        
                        <div id="GraphContainer">
                            <h3>코로나 이후</h3>
                            <BarChart data={[region,postCovid]}></BarChart> 
                        </div>
                    </div>
                }

                {closeDate !== undefined &&

                    <div id="GraphContainer">    

                        <LineChart data={[closeDate,closeCount]}></LineChart>
                    </div>
                }
            </div>


                
                <div id="ButtonContainer">

                    <Button onClick={toggleDiv1} style={{ marginLeft:"100px",           marginRight:"30px", backgroundColor:'rgb(75,192,  192)'}}  disabled={(userSelect[0]==='' || userSelect[0] ==='미정')}>추천업종 보러가기</Button>
                    <Button onClick={toggleDiv2} style={{marginRight:"30px",backgroundColor:'rgb(75,192,192)'}} disabled={(userSelect[1]==='' || userSelect[1] ==='미정')}>추천지역 보러가기</Button>

                </div>
                    

                <div id='recommend'>
                    <div id='category'>
                        <h2>{userSelect[1]} 지역 추천 업종입니다.</h2>

                        <DualBarChart data={categoryListData}></DualBarChart>
                        
                    </div>
                    <div id='region'>
                        <h2>{userSelect[0]} 업종 추천 지역입니다.</h2>

                        <DualBarChart data={regionListData}></DualBarChart>
                        
                    </div>
                </div>       
        </div>
            
    );
    
}

export default Result;