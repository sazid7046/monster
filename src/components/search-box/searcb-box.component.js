import React from 'react';
import './search-box.css';

export default function SearchBox({placeholder, handleChange}){
  return(
    <div className='search'>
      <input 
      className='search_box'
      type='search' 
      placeholder={placeholder}
      onChange={handleChange}/>
    </div>
  );
}