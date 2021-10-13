import React from "react";
import { StyledMainDiv, Styledblank, StyledMent } from "../Styled/Styled";

const Main = ({history}) => {
    return (
        <StyledMainDiv className="class-main">


            <Styledblank className="first_picture">

            </Styledblank>

            <StyledMent className="Ment">
                <h3>예비 창업자를 위한 상권 분석 서비스는...... 입니다.</h3>
                <button onClick={() => {history.push("/Survey")}}>분석하기</button>
            </StyledMent>
            
            
        </StyledMainDiv>




    );

}

export default Main;