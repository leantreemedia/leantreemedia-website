import * as React from 'react';
import Bush from './objects/bush';
import RoundTree from './objects/RoundTree';
import SharpTree from './objects/SharpTree';

interface TreeGroupProps {
  style?: React.CSSProperties;
  zIndex?: number;
  delay?: number;
}

const TreeGroup: React.FC<TreeGroupProps> = ({ style, zIndex, delay }) => (
  <div className='tree-group' style={{ zIndex: zIndex, animationDelay: `${delay}s`, ...style }}>
    <SharpTree color='#2ecc71' width={"90%"}  style={{right: '0%',  bottom: '-5px', zIndex: 100 }} />
    <SharpTree color='#27ae60' width={"100%"} style={{ right: '30%', zIndex: 90 }} />
    <Bush color='#25a159' width={"90%"} style={{ right: '40%', zIndex: 120 }} />
    <RoundTree color='#28d873' width={"90%"} style={{ right: '88%', bottom: '2px', zIndex: 110 }} />
  </div>
);

export default TreeGroup;