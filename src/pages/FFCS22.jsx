import React from 'react'

import CardList from '../components/CardList'

const FFCS22 = () => {
    const ffcs22_details = [
      { name: 'KUNAL MUKHERJEE', regno: '22BAI1472' },
    { name: 'KARTHIK V', regno: '22BCE1204'},
    { name: 'SHUBHAM KUMAR SINHA', regno: '22BCE1236'},
    { name: 'ROSHANTHRAJ N', regno: '22BCE1318'},
    { name: 'ADIT PUSHAN K', regno: '22BCE1493'},
    { name: 'SASANAPURI SAIGOVARDHAN RAMAKRISHNA', regno: '22BCE1704'},
    { name: 'ANIRUDDH GUPTA', regno: '22BCE1813'},
    { name: 'AVNI JAIN', regno: '22BCE1987'},
    { name: 'LALIT SINGH', regno: '22BCE5039'},
    { name: 'PESALA VENKATA NAGA SAI NIKHIL', regno: '22BCE5199'},
    { name: 'S SRIRAM ADHITHYAA', regno: '22BCE5203'},
    { name: 'GOWTHAM S', regno: '22BCE5246'},
    { name: 'A MAHISSVEL', regno: '22BEE1010'},
    { name: 'BALAJI K', regno: '22BEE1146'},
    { name: 'RAMANA HANUMANTH S', regno: '22BEE1174'},
    { name: 'R S JITHESH', regno: '22BEE1189'},
    { name: 'SAAHIL AHMED M', regno: '22BEE1218'},
    { name: 'CHALLA HARINI', regno: '22BEE1267'},
    { name: 'PRADEESH R', regno: '22BEE1268'},
    { name: 'SANJAI M', regno: '22BEE1302'},
    { name: 'SAINY MISHRA', regno: '22BLC1033'},
    { name: 'TERESA SARA SAJI', regno: '22BLC1046'},
    { name: 'DEEPTANSHU BHATTACHARYA', regno: '22BLC1244'},
    { name: 'SHLOK SHARMA', regno: '22BLC1255'},
    { name: 'GUTHA ABIRAM', regno: '22BRS1236'},
    { name: 'GHANTA REWANTH', regno: '22BRS1240'},
    { name: 'V S KANISHITH REDDY BAKKIREDDY', regno: '22BRS1273'},
    { name: 'RIMMI KUMARI', regno: '22BRS1288'},
    { name: 'KOTHA SARVAGNA', regno: '22BRS1290'},
    { name: 'THOTAKURA CHAKRI', regno: '22BRS1317'},
        
      ];
  return (
    <div>
      <CardList heading='FFCS MEMBERS 2022' listName={ffcs22_details}/>
    </div>
  )
}

export default FFCS22