import *  as React from 'react';

interface BushProps {
  style?: React.CSSProperties,
  color?: string;
  width?: string;
}

const Bush: React.FC<BushProps> = ({ style, color, width }) => (
  <div className='bush' style={style}>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 260 203" width={width} fill={color}>
      <path d="M260.254 140.583c0 12.771-7.82 24.65-21.223 34.591a59.379 59.379 0 0 1-22.693 12.749c-22.958 9.878-53.134 15.885-86.211 15.885C58.26 203.808.004 175.501.004 140.583c0-10.547 5.344-20.482 14.744-29.225a47.594 47.594 0 0 1 37.306-77.142c.908 0 1.807.031 2.7.081a44.609 44.609 0 0 1 86.436-1.435 54.31 54.31 0 0 1 48.586 39.31 59.481 59.481 0 0 1 68.992 58.74v.08a31.954 31.954 0 0 1 1.486 9.591Z" />
    </svg>
  </div>
);

export default Bush;