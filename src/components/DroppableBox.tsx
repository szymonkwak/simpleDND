import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface DroppableBoxProps {
  boxTitle: string;
  children?: ReactNode;
}

const DroppableContainer = styled.div`
  background-color: #333664;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexDiv = styled.div`
  overflow: hidden;
  /* width: 40vw; */
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #4f539d;
`;

const DroppableBox = ({ boxTitle, children }: DroppableBoxProps) => {
  return (
    <DroppableContainer>
      <h3>{boxTitle}</h3>
      <FlexDiv>{children}</FlexDiv>
    </DroppableContainer>
  );
};

export default DroppableBox;
