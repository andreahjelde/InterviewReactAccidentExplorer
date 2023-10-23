import React, { useState } from 'react';
import './HomeTask.css';

function HomeTask({accidents, setLocation}) {
  const [idOfCollapseble, setIdOfCollapseble] = useState(null)
  const [open, setOpen] = useState(false)
  const [filterSpeed, setFilter] = useState(null)

  //SKRIV HVA DETTE GJØR
  function biggestToSmallest(a,b){
    b.Ulykkesdato - a.Ulykkesdato
  }

  //SKRIV HVA DETTE GJØR
  accidents.sort(biggestToSmallest)

  //SKRIV HVA DETTE GJØR
  const sortedList = accidents?.sort((a,b) => b.Ulykkesdato - a.Ulykkesdato)
  const filteredList = sortedList.filter(a => filterSpeed === null ||filterSpeed === a.Fartsgrense)
  
    //Mapper ut objektene i listen "accidents" - returnerer bare kommunenavn og dato
  const accidentData = filteredList.map((item, index) => {
    
    if( !idOfCollapseble && index === 0 || item.OBJECTID === idOfCollapseble){ // denne skal være åpen
      return <div className='accident-list-element-expand' key={index} onClick={()=>setIdOfCollapseble(item.OBJECTID )}>
        <div className='accident-list-element-expand-info'>
          <p>{item.Kommunenavn}  </p>
          <p>{new Date(item.Ulykkesdato).toLocaleDateString()} </p>
          <p>{new Date(item.Ulykkesdato).toLocaleTimeString()}</p>
        </div>
        <p>Antall enheter: {item.Antall_enheter}  </p>
        <p>Fartsgrense: {item.Fartsgrense} </p>
        <p>Fylke: {item.Fylkenavn} </p>
        <p>Førerforhold: {item.Føreforhold}</p>
        <p>Kommune: {item.Kommunenavn} </p>
        <p>Lysforhold: {item.Lysforhold}</p>
        
      </div>
    }

    else{ //ellers skal denne være lukket
      return <div className='accident-list-element' key={index} onClick={()=>setIdOfCollapseble(item.OBJECTID)}>
          <p>{item.Kommunenavn}  </p>
          <p>{new Date(item.Ulykkesdato).toLocaleDateString()} </p>
          <p>{new Date(item.Ulykkesdato).toLocaleTimeString()} </p>
        </div>
      }
    })

       //SKRIV HVA DETTE GJØR
    const handleOpen = () => {
      setOpen(!open)
    }
    const handleFilterSelect = (filter)=>{
      setIdOfCollapseble(null)
      handleOpen()
      setFilter(filter)
      
    }

   
      //SKRIV HVA DETTE GJØR
    const accidentFilter = () => {
        return <div className='dropdown'>
          
        <p onClick={handleOpen}>{filterSpeed ? <p className='menu-title'>{filterSpeed}</p> : <p className='menu-title'>vis alt</p> }</p>
        {open ? (
          <ul className='menu'>
             <li className='menu-item'>
              <p onClick={()=>{handleFilterSelect(null)}}>Vis alt</p>
            </li>
            <li className='menu-item'>
              <p onClick={()=>{handleFilterSelect("110")}}>110</p>
            </li>
            <li className='menu-item'>
              <p onClick={()=>{handleFilterSelect("100")}}>100</p>
            </li>
            <li className='menu-item'>
              <p onClick={()=>{handleFilterSelect("90")}}>90</p>
            </li>
            <li className='menu-item'>
              <p onClick={()=>{handleFilterSelect("80")}}>80</p>
            </li>
          </ul>
        ):  null}
          </div>
        
    }

  return (
    <div className="homeTask">
      <header className="homeTask-header">
        HomeTask: Accidents Explorer
      </header>
      <div className='accident-count'>Ulykker: {filteredList?.length}</div>
      <div className='accident-filter'>
        <p>Filter:</p> 
        <p>{accidentFilter()}</p>
      </div>
      <div className='accident-list'>
        <div >{accidentData}</div>
      </div>
      
    </div>
  );
}

export default HomeTask;
