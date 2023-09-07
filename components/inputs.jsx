import React from 'react';

function Inputs({ value, onChange, name }) {
  return (
    <input
      className='rounded-xl focus:outline-none pl-1'
      type="text"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      name={name}
    />
  );
}

export default Inputs;