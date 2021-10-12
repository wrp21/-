import React from "react";

const Main = ({history}) => {
    return (
        <div className="class-main">
            
            <p>예비 창업자를 위한 상권 분석 서비스는...... 입니다.</p>
            <button onClick={() => {history.push("/Survey")}}>분석하기</button>
        </div>
    );

}

export default Main;