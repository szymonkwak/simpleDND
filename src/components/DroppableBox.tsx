import React from 'react';

interface DroppableBoxProps {
  boxTitle: string;
}

const DroppableBox = ({ boxTitle }: DroppableBoxProps) => {
  return (
    <div style={{ backgroundColor: '#4a50be', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>{boxTitle}</h3>
      <div style={{ width: '40vw', height: '40vw', backgroundColor: '#646cff' }}></div>
    </div>
  );
};

export default DroppableBox;
