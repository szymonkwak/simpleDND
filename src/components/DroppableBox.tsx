import React, { ReactNode } from 'react';

interface DroppableBoxProps {
  boxTitle: string;
  children?: ReactNode;
}

const DroppableBox = ({ boxTitle, children }: DroppableBoxProps) => {
  return (
    <div style={{ backgroundColor: '#333664', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>{boxTitle}</h3>
      <div
        style={{
          overflow: 'hidden',
          maxWidth: '40vw',
          height: '80vh',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          backgroundColor: '#4f539d',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DroppableBox;
