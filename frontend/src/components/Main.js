// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import React from "react";
import {    StyledMainDiv, Styledblank, StyledMent,StyledFlexDiv, StyledFooter, 
            StyledInlineDiv, StyledTitleMent, StyledIntroNav, StyledIntroMenu,
            StyledIntroUl, StyledIntroDiv, StyledIntroMenuWhite
        } from "../Styled/Styled";

const Main = ({history}) => {
    return (
        <>
        <StyledMainDiv className="class-main">
                <StyledTitleMent>
                    음식점 창업
                    <br></br>
                    상권 분석을 통하여 유리한 업종과 지역을 알아보세요.
                    <br></br>
                        
                    <StyledInlineDiv>
                        <Button onClick={() => {history.push('/Survey')}}>분석하기</Button>
                    </StyledInlineDiv>

                    <StyledInlineDiv>
                        <Button>알아보기</Button>
                    </StyledInlineDiv>

                </StyledTitleMent>

        </StyledMainDiv>

        <StyledIntroNav>
            <StyledIntroDiv href="#" onClick={
                () => {
                    alert("음식업종분석 설명 위치로 스크롤 이동")
                }
            }>
                음식 업종 분석
            </StyledIntroDiv>

            
            <StyledIntroDiv href="#" onClick={
                () => {
                    alert("지역분석 설명 위치로 스크롤 이동")
                }
            }>
                지역 분석
            </StyledIntroDiv>

            <StyledIntroDiv href="#" onClick={
                ()=> {
                    alert("업종, 지역 분석 위치로 스크롤 이동");
                }
            }>
                업종, 지역 분석
            </StyledIntroDiv>
            
        </StyledIntroNav>


        <StyledIntroMenu>
            1. 원하시는 음식 업종을 선택하세요.

            <br></br>
            <br></br>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>
        </StyledIntroMenu>

        <StyledIntroMenuWhite>
            2. 원하시는 지역을 선택하세요.

            <br></br>
            <br></br>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>
        </StyledIntroMenuWhite>

        <StyledIntroMenu>
            3. 업종과 지역을 모두 선택하세요.

            <br></br>
            <br></br>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore mollitia corrupti distinctio atque accusamus 
                aliquid ipsa deserunt tenetur molestias tempore ab, 
                reiciendis eum in quo officiis impedit. Nam, deserunt impedit.
            </p>
        </StyledIntroMenu>

        <StyledFlexDiv>
            <StyledFooter>
                Hello from Seoul

            </StyledFooter>
        </StyledFlexDiv>

        </>

    );

}

export default Main;

