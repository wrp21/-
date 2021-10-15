import React from "react";
import "../Styled/result.css";
import styled from "styled-components";

const Ranking = ({lines, startIdx}) => {
  return (
    <>
    <HeaderTag>{lines[startIdx].split(".")[0]}.</HeaderTag>
    <span>{lines[startIdx].split(".")[1]}</span>
    <UlTag>
      <li>{lines[startIdx + 1]}</li>
      <li>{lines[startIdx + 2]}</li>
      <li>{lines[startIdx + 3]}</li>
    </UlTag>
    </>
  );
};

const Description = ({ desc }) => {
  const lines = desc.split("\n");

  return (
    <DescWraper>
      <DescFrame>
        <Ranking lines={lines} startIdx={0} />
        <Ranking lines={lines} startIdx={4} />
        <Ranking lines={lines} startIdx={8} />
        <Ranking lines={lines} startIdx={12} />        
      </DescFrame>
    </DescWraper>
  );
};

const DescWraper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const DescFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const HeaderTag = styled.span`
  font-size: 28px;
`;

const UlTag = styled.ul`
  font-size: 20px;
  margin: 20px;
`;

export default Description;
