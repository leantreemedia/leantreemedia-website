import *  as React from 'react';

interface SharpTreeProps {
  style?: React.CSSProperties;
  color?: string;
  width?: string;
}

const SharpTree: React.FC<SharpTreeProps> = ({ style, color, width }) => (
  <div className='sharp-tree' style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 441" width={width} fill={color}>
      <path d="m147.757 0 78.076 152.834-32.742-9.392 61.285 121.242-32.741-8.538 70.52 117.827-118.372-36.714.839 100.751-55.409 3.415-4.2-103.312L0 375.681l73.879-120.389-33.581 10.246 62.965-122.1-36.1 12.807Z"/>
    </svg>
  </div>
);

export default SharpTree;