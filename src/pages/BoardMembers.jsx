
import React from 'react'

import CardList from '../components/CardList'

const BoardMembers = () => {
    const board_details = [
        { name: 'Raushan Kumar', regno: '21BCE5264' },
        { name: 'Leerish Arvind', regno: '21BCE1867' },
        { name: 'Arjun', regno: '21BCE1806' },
        { name: 'Mridhula S', regno: '21BLC1144' },
        { name: 'B Shreya', regno: '21BCE6167' },
        { name: 'Surbhi Verma', regno: '21BRS1484' },
        { name: 'Arnab Das', regno: '21BEE1063' },
        { name: 'Afzal Ahamed Shaheena', regno: '22BAI1266' },
        { name: 'Shivangi Agarwal', regno: '21BCE5940' },
        { name: 'Sriram', regno: '22BCE5203' },
        { name: 'Nishanth', regno: '21BPS1160' },
        { name: 'Anirudh', regno: '22BCE1117' },
        { name: 'Shlok Sharma', regno: '22BLC1255' },
        
      ];
  return (
    <div>
      <CardList id="board-members" heading='BOARD MEMBERS' listName={board_details}/>
    </div>
  )
}

export default BoardMembers