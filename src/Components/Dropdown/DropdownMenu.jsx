import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu({filterHandler, selectedFilter }){
    
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(!open)
  }
  const filterSelect = (filter)=>{
    handleOpen()
    filterHandler(filter)
  }

  return (
    <div className='dropdown'>
      <button className='dropdownBtn'
      onClick={handleOpen}>{
      selectedFilter ? 
      <p className='menu-title'>{selectedFilter }</p> : <p className='menu-title'>Vis alt</p> }</button>
      {open ? (
        <ul className='menu'>
          <li className='menu-item' onClick={()=>{filterSelect(null)}}>Vis alt</li>
          <li className='menu-item' onClick={()=>{filterSelect("110")}}>110</li>
          <li className='menu-item' onClick={()=>{filterSelect("100")}}>100</li>
          <li className='menu-item' onClick={()=>{filterSelect("90")}}>90</li>
          <li className='menu-item' onClick={()=>{filterSelect("80")}}>80</li>
        </ul>
      ):  null}
    </div>)
}

export default DropdownMenu