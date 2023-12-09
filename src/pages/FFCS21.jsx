import React from 'react'

import CardList from '../components/CardList'

const FFCS21 = () => {
    const ffcs21_details = [
      { name: 'ANUBROTO GHOSE', regno: '21BAI1102' },
      { name: 'C VINEETHA', regno: '21BAI1358' },
      { name: 'PRUTHVI SHAILESH PRABHU', regno: '21BAI1361' },
      { name: 'SIDDHARTH GOR', regno: '21BAI1670' },
      { name: 'PADMAVASAN B', regno: '21BAI1713' },
      { name: 'ARSH AKHTAR', regno: '21BAI1716' },
      { name: 'IRUGULA SANTHOSH REDDY', regno: '21BAI1770' },
      { name: 'NOEL JACOB BIJU', regno: '21BAI1859' },
      { name: 'SRI SAI RAVI CHARAN SIDDABATHUNI', regno: '21BAI1918' },
      { name: 'HARSH JAISWAL', regno: '21BCE1145' },
      { name: 'KEVIN SEBASTIAN', regno: '21BCE1177' },
      { name: 'S KARTHIK MUTHUVEL', regno: '21BCE1327' },
      { name: 'MADHAVAN RAMAN', regno: '21BCE1449' },
      { name: 'ASWIN S KUMAR', regno: '21BCE1517' },
      { name: 'ANANDAKRISHNAN A', regno: '21BCE1682' },
      { name: 'VIBU G', regno: '21BCE1962' },
      { name: 'PIYUSH SINGHAL', regno: '21BCE5195' },
      { name: 'RAUSHAN KUMAR', regno: '21BCE5264' },
      { name: 'PERLA MOUNIKA', regno: '21BCE5422' },
      { name: 'KURAKULA DHANUNJAYA REDDY', regno: '21BCE5524' },
      { name: 'M ASHWIN', regno: '21BCE5695' },
      { name: 'ARAVINDAN JAMBUNATHAN', regno: '21BCE5804' },
      { name: 'SHIVAM KUMAR', regno: '21BCE5947' },
      { name: 'RAINA SAXENA', regno: '21BCE5986' },
      { name: 'AJAY SRIRAM', regno: '21BCE6200' },
      { name: 'YELLAPU MAHADEVA', regno: '21BEC1398' },
      { name: 'MERUVA VENKATESH', regno: '21BEC1787' },
      { name: 'MRIDHULA S', regno: '21BLC1144' },
      { name: 'KHOBARKHEDE RITANSHU RAJESH', regno: '21BLC1327' },
      { name: 'KARTIK BHARDWAJ', regno: '21BPC1008' },
      { name: 'MANE VAIBHAV SUDAM', regno: '21BPS1226' },
      { name: 'RYALI SRI RANGA SAMEER NIKHIL', regno: '21BPS1521' },
      { name: 'SUSHANT GARGI', regno: '21BRS1072' },
      { name: 'SURBHI VERMA', regno: '21BRS1484' },
      { name: 'YASSIR MUSARRAT', regno: '21BRS1701' },
        
      ];
  return (
    <div>
      <CardList id="ffcs21" heading='FFCS MEMBERS 2021' listName={ffcs21_details}/>
    </div>
  )
}

export default FFCS21