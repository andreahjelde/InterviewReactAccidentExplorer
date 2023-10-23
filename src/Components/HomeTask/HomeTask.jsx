import React, { useEffect, useState } from 'react';
import './HomeTask.css';
import DropdownMenu from '../Dropdown/DropdownMenu';
import Card from '../Card/Card';

function HomeTask({accidents, setLocation}) {
  const [idOfCollapseble, setIdOfCollapseble] = useState(null)
  const [selecrtedFilter, setFilter] = useState(null)
  const sortedList = accidents?.sort((a,b) => b.Ulykkesdato - a.Ulykkesdato)
  const filteredList = sortedList.filter(a => selecrtedFilter === null ||selecrtedFilter === a.Fartsgrense)

  const zoomToAccident = (accident) => {
    const location = {x:accident.x, y:accident.y}
    setLocation(location)
  }

  const handleFilterSelect = (filter)=>{
    setIdOfCollapseble(null)
    setFilter(filter)
  }

  useEffect(()=>{
    setIdOfCollapseble(null)
  },[filteredList[0]])

  //Mapper ut objektene i listen "accidents" 
  const accidentData = filteredList.map((accident, index) => {
    let isOpen = !idOfCollapseble && index === 0 || accident.OBJECTID === idOfCollapseble
      return <Card 
        key={accident.OBJECTID} 
        accident={accident} 
        zoomHandler={zoomToAccident}
        expandHandler={setIdOfCollapseble} 
        isOpen = {isOpen}/>
    })

  return (
    <div className="homeTask">
      <header className="homeTask-header">HomeTask: Accidents Explorer</header>
      <div className='accident-count'>Ulykker: {filteredList?.length}</div>
      <div className='accident-filter'>
        <p className='accident-filter-text'>Filter:</p> 
        <DropdownMenu filterHandler={handleFilterSelect} selectedFilter={selecrtedFilter} />
      </div>
        <div className='accident-list'>{accidentData}</div>
    </div>
  );
}

export default HomeTask;
