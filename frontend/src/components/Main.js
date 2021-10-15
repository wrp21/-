import Button from 'react-bootstrap/Button';
import React from "react";
import { Bar, Line } from 'react-chartjs-2';

import { Link } from "react-scroll";
import {Fade} from "react-reveal";
import { Bounce } from 'react-reveal';


import {    StyledMainDiv,StyledFlexDiv, StyledFooter, 
            StyledInlineDiv, StyledTitleMent, StyledIntroNav,
            StyledIntroDiv,
            StyledIntroMenuRegion, StyledIntroMenuCategory, StyledIntroMenuBoth,
            StyledInlineDivImg, StyledWrapDiv
        } from "../Styled/Styled";

///////////////////////// 소개 페이지에 사용할 Bar chart props 정의 //////////////////////
///////////////////////// <Bar data={data} legend={legend} options={options}/>//////////
const regionChartLegend = {
    display:false,
    labels: {
        fontColor: "black",
    },
    position: "top",
};

const regionChartData = {
    labels: ["경양식", "김밥", "식육", "중국식", "통닭", "한식", "횟집"],
    datasets: [{
        label: '강남구',
        data: [10, 6, 1, 13, 12, 12, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 2
    }]
};

const bothChartOptions = {
    maintainAspectRatio: false,
    animation:{
        duration:1
    },
    scales:{
        y:{
            min:0,
            max:10
        }
    },
    title: {
        display:true,
        text:'분식의 코로나 전후 비교'
    }
};

const bothChartLegend = {
    display:false,
    labels: {
        fontColor: "black",
    },
    position: "top",
};

const bothChartData = {
    labels: ["강남구", "관악구", "마포구", "영등포",],
    datasets: [
        {
            label: '코로나 이전',
            data: [2, 1, 2, 5],
            backgroundColor:'rgba(54, 162, 235, 0.2)',// blue, transparent 0.2,
            borderColor:'rgb(54, 162, 235)',
            borderWidth: 2
        },
        {
            label: '코로나 이후',
            data: [10, 5, 4, 3],
            backgroundColor:'rgba(255, 99, 132, 0.2)',// red, transparent 0.2
            borderColor:'rgb(255, 99, 132)',
            
            borderWidth: 2
        }
    ]
};

const regionChartOptions = {
    maintainAspectRatio: false,
    animation:{
        duration:1
    },
    scales:{
        y:{
            min:0,
            max:16
        }
    }
};



////////////////////////////////////////////////////////////////////////////////////////



///////////////////////// 소개 페이지에 사용할 Line chart props 정의 //////////////////////
///////////////////////// <Line data={data} legend={legend} options={options}/>//////////
const categoryChartLegend = {
    display:false,
    labels: {
        fontColor: "black",
    },
    position: "top",
};

const categoryChartData = {
    labels: ['02', '04', '06', '08', "10", "12", "02", "04"],
    datasets:[
        {
            label:'X : Month / Y : data',
            data: [4.2, 3.5 , 4.1, 2.1, 5.5, 3, 4, 1],
            fill: true,
            // borderColor: 'rgb(255, 0, 192)',
            // backgroundColor:'rgba(255, 0, 192, 0.25)',
            backgroundColor:'rgba(54, 162, 235, 0.2)',// blue, transparent 0.2,
            borderColor:'rgb(54, 162, 235)',
            borderWidth:3
        }
    ]
};

const categoryChartOptions = {
    maintainAspectRatio: false,
    animations:{
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop:true
        }
    },
    scales:{
        y:{
            min:0,
            max:6
        }
    }
};


/////////////////////////////////////////////////////////////////////////////////////////

const Main = ({history}) => {
    return (
        <>
        
        <StyledMainDiv className="class-main">
            <Fade Buttom duration={3000} delay={100} opposite={true}>
                <StyledTitleMent>
                
                    음식점 창업
                
                    <br></br>
                    상권 분석을 통하여 유리한 업종과 지역을 찾아보세요.
                    <br></br>
                
                    
                    <StyledInlineDiv>
                        <Button onClick={() => {history.push('/Survey')}}>분석하기</Button>
                    </StyledInlineDiv>
                    <StyledInlineDiv>
                        <Link to="intro-nav" spy={true} smooth={true}>
                            <Button>
                                설명보기
                            </Button>
                        </Link>
                    </StyledInlineDiv>
                </StyledTitleMent>
            </Fade>
            

        </StyledMainDiv>

        <StyledIntroNav id="intro-nav">

        <Link to="intro-category" spy={true} smooth={true}>    
            <StyledIntroDiv href="#">
                업종 분석
            </StyledIntroDiv>
        </Link>

        <Link to="intro-region" spy={true} smooth={true}>   
            <StyledIntroDiv href="#">
                지역 분석
            </StyledIntroDiv>
        </Link>

        <Link to="intro-both" spy={true} smooth={true}> 
            <StyledIntroDiv href="#">
                업종, 지역 분석
            </StyledIntroDiv>
        </Link>
            

        </StyledIntroNav>

        <Bounce right duration={2000} delay={100} >
        <StyledIntroMenuCategory id="intro-category">
            <StyledWrapDiv>

                <StyledInlineDivImg>
                    <Line 
                        data={categoryChartData} 
                        legend={categoryChartLegend}
                        options={categoryChartOptions}
                    > </Line>
                </StyledInlineDivImg>
                <Fade bottom duration={2000} delay={200}>
                    <StyledInlineDiv className="ment">
                        <h2>
                            업종 분석
                        </h2>
                        
                        <br></br>
                        <br></br>
                        <p>
                        서울특별시 내 인허가된 일반음식점들의 여러가지 측면을 분석하여
                        <br></br>

                        원하시는 업종을 선택하셨을 때 해당 업종을 추천드리는 서울특별시
                        <br></br>
                        내 지역구를 알려 드립니다.
                        </p>
                    </StyledInlineDiv>
                </Fade>
            </StyledWrapDiv>

        </StyledIntroMenuCategory>
        </Bounce>
        
    
        <Bounce left duration={2000} delay={300}>
            <StyledIntroMenuRegion id="intro-region">
                <StyledWrapDiv>
                    <StyledInlineDivImg>
                        <Bar 
                            data={regionChartData} 
                            legend={regionChartLegend}
                            options={regionChartOptions}
                        > </Bar>
                    </StyledInlineDivImg>

                    <Fade bottom duration={2000} delay={200}>
                        <StyledInlineDiv className="ment">
                            <h2>
                                
                                지역 분석
                            </h2>

                            <br></br>
                            <br></br>

                            <p>
                                서울특별시 내 인허가된 일반음식점들의 여러가지 측면을 분석하여
                                <br></br> 
                                창업을 원하시는 지역을 선택하셨을 때 해당 지역구 내 최적의 업종을
                                <br></br> 
                                알려 드립니다.
                            </p>
                        </StyledInlineDiv>
                    </Fade>
                </StyledWrapDiv>
            </StyledIntroMenuRegion>
        </Bounce>

        <Bounce left duration={2000} delay={100}>
            <StyledIntroMenuBoth id="intro-both">
                <StyledWrapDiv>
                    <StyledInlineDivImg>
                    <Bar 
                            data={bothChartData} 
                            legend={bothChartLegend}
                            options={bothChartOptions}
                    > </Bar>
                    </StyledInlineDivImg>

                    <Fade bottom duration={2200} delay={400}>
                        <StyledInlineDiv className="ment">
                        <h2>
                            업종 지역 분석
                        </h2>

                        <br></br>
                        <br></br>
                        <p>
                            서울특별시 내 인허가된 일반음식점들의 여러가지 측면을 분석하여
                            <br></br>
                            원하시는 업종과 창업을 원하시는 지역을 모두 선택하셨을 때
                            <br></br>
                            2019년 9월부터 페업 건수의 변화 추이를 알려 드립니다.
                        </p>
                        </StyledInlineDiv>
                    </Fade>
                </StyledWrapDiv>
            </StyledIntroMenuBoth>
        </Bounce>

        <StyledFlexDiv>
            <StyledFooter>
                데이터 분석 웹 서비스 프로젝트 - 배달 서비스 2팀
            </StyledFooter>
        </StyledFlexDiv>
        </>
        
    );

}

export default Main;

