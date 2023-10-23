import React, { useState } from 'react';
import './HomeTask.css';

function HomeTask({accidents, setLocation}) {
  const [idOfCollapseble, setIdOfCollapseble] = useState(null)
  const [open, setOpen] = useState(false)
  const [filterSpeed, setFilter] = useState(null)

   //SKRIV HVA DETTE GJØR
  const zoomToAccident = (accident) => {
    const location = {x:accident.x, y:accident.y}
    setLocation(location)
  }

  //SKRIV HVA DETTE GJØR
  const sortedList = accidents?.sort((a,b) => b.Ulykkesdato - a.Ulykkesdato)
  const filteredList = sortedList.filter(a => filterSpeed === null ||filterSpeed === a.Fartsgrense)

  //Mapper ut objektene i listen "accidents" - returnerer bare kommunenavn og dato
  const accidentData = filteredList.map((item, index) => {
    if( !idOfCollapseble && index === 0 || item.OBJECTID === idOfCollapseble){ // denne skal være åpen
      return <div className='accident-list-element-expand' key={index} onClick={()=>setIdOfCollapseble(item.OBJECTID )}>

        <div className='accident-list-element-expand-main'>
          <p>{item.Kommunenavn}</p>
          <p>{new Date(item.Ulykkesdato).toLocaleDateString()}, </p>
          <p>{new Date(item.Ulykkesdato).toLocaleTimeString()}</p>
        </div>
        
          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Antall enheter: </p>
            <p>{item.Antall_enheter}</p>
          </div>

          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Fartsgrense: </p>
            <p>{item.Fartsgrense} </p>
          </div>

          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Fylke: </p>
            <p>{item.Fylkenavn} </p>
          </div>
          
          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Førerforhold: </p>
            <p>{item.Føreforhold}</p>
          </div>
          
          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Kommune: </p>
            <p>{item.Kommunenavn} </p>
          </div>
          
          <div className='accident-list-element-expand-info'>
            <p className='accident-list-element-title'>Lysforhold: </p>
            <p>{item.Lysforhold}</p>
          </div>
        <button onClick={()=>zoomToAccident(item)}>Zoom til lokasjon</button>
      </div>
    }

    else{ //ellers skal denne være lukket
      return <div className='accident-list-element' key={index} onClick={()=>setIdOfCollapseble(item.OBJECTID)}>
          <p>{item.Kommunenavn}  </p>
          <p>{new Date(item.Ulykkesdato).toLocaleDateString()}, </p>
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
        <button onClick={handleOpen}>{filterSpeed ? <p className='menu-title'>{filterSpeed}</p> : <p className='menu-title'>vis alt</p> }</button>
        {open ? (
          <ul className='menu'>
            <li className='menu-item' onClick={()=>{handleFilterSelect(null)}}>Vis alt</li>
            <li className='menu-item' onClick={()=>{handleFilterSelect("110")}}>110</li>
            <li className='menu-item' onClick={()=>{handleFilterSelect("100")}}>100</li>
            <li className='menu-item' onClick={()=>{handleFilterSelect("90")}}>90</li>
            <li className='menu-item' onClick={()=>{handleFilterSelect("80")}}>80</li>
          </ul>
        ):  null}
          </div>
    }

  return (
    <div className="homeTask">
      <header className="homeTask-header">HomeTask: Accidents Explorer</header>
      <div className='accident-count'>Ulykker: {filteredList?.length}</div>
      <div className='accident-filter'>
        <p>Filter:</p> 
        <p>{accidentFilter()}</p>
      </div>
        <div className='accident-list'>{accidentData}</div>
    </div>
  );
}

export default HomeTask;
