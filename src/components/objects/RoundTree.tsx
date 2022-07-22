import *  as React from 'react';

interface RoundTreeProps {
  style?: React.CSSProperties,
  color?: string;
  width?: string;
}

const RoundTree: React.FC<RoundTreeProps> = ({ style, color, width }) => (
  <div className='round-tree' style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229 334" width={width} fill={color}>
      <path d="M142.768 225.58v109.141H90.717V226.615a114.5 114.5 0 1 1 52.051-1.035Z" />
    </svg>
  </div>
);

export default RoundTree;