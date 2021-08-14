import React from 'react';
import '@/components/Button/Button.scss';

function Button():JSX.Element {
  function clickHandler() {
    console.log('click')
  }

  return (
    <button onClick={clickHandler} className='button'>Click on me!</button>
  )
}

export default Button;