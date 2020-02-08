import React from "react";
import styled from "styled-components";

export default function Title({ title, fontSize, center,fontWeight,color }) {
  return (
    <TitleWrapper center={center} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {title}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  font-size: ${props => props.fontSize}px;
  text-align: ${props => (props.center ? "center" : "left")};
  font-weight:${props =>props.fontWeight};
  color:${props =>props.color};
`;
