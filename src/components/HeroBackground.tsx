import * as React from 'react';
import Land from './objects/Land';
import TreeGroup from './TreeGroup';

const HeroBackground = () => (
  <div className='hero-background'>
    <div className='forest'>
      <TreeGroup zIndex={70} delay={0.25} style={{ right: '0%', bottom: '0%', minWidth: '12%' }}/>
      <TreeGroup zIndex={60} delay={0.2} style={{ right: '16%', bottom: '-10px', minWidth: '8%'}}/>
      <TreeGroup zIndex={40} delay={0.15} style={{ right: '20%', bottom: '15px', minWidth: '8.5%'}}/>
      <TreeGroup zIndex={80} delay={0.1} style={{ right: '29%', bottom: '-26px', minWidth: '7%' }}/>
      <TreeGroup zIndex={40} delay={0} style={{ right: '38%', bottom: '0px', minWidth: '10%' }}/>
      <Land color='#27ae60' style={{ position: 'absolute', bottom: '-20px', right: '-10px', transformOrigin: 'bottom right', zIndex: 50 }}/>
    </div>
  </div>
);

export default HeroBackground;