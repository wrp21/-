// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import React from "react";

import { Link } from "react-scroll";
import {Fade} from "react-reveal";
import { Bounce } from 'react-reveal';


import {    StyledMainDiv,StyledFlexDiv, StyledFooter, 
            StyledInlineDiv, StyledTitleMent, StyledIntroNav,
            StyledIntroDiv,
            StyledIntroMenuRegion, StyledIntroMenuCategory, StyledIntroMenuBoth
        } from "../Styled/Styled";

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

        <Bounce left duration={2000} delay={100} >
        <StyledIntroMenuCategory id="intro-category">
        
            <h2>
                
                1. 원하시는 음식 업종을 선택하세요.
                
            </h2>
            
            

            <br></br>
            <br></br>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>
        </StyledIntroMenuCategory>
        </Bounce>
        
    
        <Bounce right duration={2000} delay={100}>
        <StyledIntroMenuRegion id="intro-region">
            <h2>
                2. 원하시는 지역을 선택하세요.
            </h2>

            <br></br>
            <br></br>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>
        </StyledIntroMenuRegion>
        </Bounce>

        <Bounce left duration={2000} delay={100}>
        <StyledIntroMenuBoth id="intro-both">
            <h2>
                3. 업종과 지역을 모두 선택하세요.
            </h2>

            <br></br>
            <br></br>
            <p>
                1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>

            
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

