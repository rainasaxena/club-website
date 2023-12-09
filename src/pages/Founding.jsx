import React from 'react'

import CardList from '../components/CardList'

const Founding = () => {
    const founding_details = [
        { name: 'Kaushik K', regno: '20BCE1416' },
        { name: 'Gautham Rajan T S', regno: '20BCE1484' },
        { name: 'Riddhiman R', regno: '20BCE1624' },
        { name: 'Sri Priyadharsan K', regno: '20BCE1255' },
        { name: 'Lakshitha S K', regno: '20BCE1649' },
        { name: 'Shashvath Radhakrishnan', regno: '20BCE1081' },
        { name: 'Shradhdha Yagneshkumar Gohil', regno: '20BCE1406' },
        { name: 'Sakthi Saravanan S', regno: '20BCE1354' },
        { name: 'Naga Pranava Shashank V', regno: '20BCE1312' },
        
      ];
  return (
    <div>
      <CardList heading='FOUNDING MEMBERS' listName={founding_details}/>
    </div>
  )
}

export default Founding