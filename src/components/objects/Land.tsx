import *  as React from 'react';

interface LandProps {
  style?: React.CSSProperties,
  color?: string;
}

const Land: React.FC<LandProps> = ({ style, color }) => (
  <div className='land' style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2886 219" width="100%" fill={color}>
      <path d="M2886 211 0 219v-14s422.614-92 939-92c101.582 0 199.376 1.526 290.948 4.345C1299.439 50.642 1640.377 0 2050.5 0 2510.829 0 2884 63.8 2884 142.5c0 22.42 2 68.5 2 68.5Z"/>
    </svg>
  </div>
);

export default Land;