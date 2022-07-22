import *  as React from 'react';

const Logo: React.FC = () => (
  <a className='logo' href='/'>
    <div className='logo-icon'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 108">
        <path d="m29 108-1-22h4l11 2v19l-14 1Zm42-16-19-6-9-15 6 2-11-24 5 2-15-35 8-15 19 37-8-2 15 29-8-2 17 29ZM1 91l15-25-8 4 13-25-7 2 14-26 11 26-6-2 11 24-6-2 12 21-18-5-12 1-19 7Z"/>
      </svg>
    </div>
    <div className='logo-text'>
      <h1>Leantree Media</h1>
    </div>
  </a>
);

export default Logo;