import React, { useState } from 'react';
import './HomeTask.css';
import { it } from 'vitest';

function HomeTask({accidents, setLocation}) {


  //SKRIV HVA DETTE GJØR
  function biggestToSmallest(a,b){
    b.Ulykkesdato - a.Ulykkesdato
  }

  //SKRIV HVA DETTE GJØR
  accidents.sort(biggestToSmallest)

  //SKRIV HVA DETTE GJØR
  const sortedList = accidents?.sort((a,b) => b.Ulykkesdato - a.Ulykkesdato)

  //Mapper ut objektene i listen "accidents" - returnerer bare kommunenavn og dato
  const accidentData = sortedList.map((item, index) => {
    return <li className='accident-list-element' key={index}>{item.Kommunenavn}  {new Date(item.Ulykkesdato).toLocaleDateString()} {new Date(item.Ulykkesdato).toLocaleTimeString()} </li>
  })

  const accidentDataFull = sortedList.map((item, index) => {
    console.log(item)
    return <li className='accident--list-element-expand' key={index}>
      {item.Antall_enheter}  
      {item.Fartsgrense} 
      {item.Fylkenavn} 
      {item.Føreforhold}
      {item.Kommunenavn} 
      {item.Lysforhold}
      </li>
  })


  return (
    <div className="homeTask">
      <header className="homeTask-header">
        HomeTask: Accidents Explorer
      </header>
      <div className='accident-count'>Ulykker: {accidents?.length}</div>
      <div className='accident-list'>
        <div >{accidentData}</div>
        <div >{accidentDataFull}</div>
      </div>
      
    </div>
  );
}

export default HomeTask;
