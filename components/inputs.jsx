import React from 'react';

function Inputs({ value, onChange }) {
  return (
    <input
      className='rounded-xl focus:outline-none pl-1'
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Inputs;