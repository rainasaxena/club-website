import React from 'react';
import { useNavigate } from "react-router-dom";

const Team = () => {

  const navigate = useNavigate();
  const details = [
    { name: 'Name', post: 'designation/regno' },
    { name: 'Name', post: 'designation/regno' },
    { name: 'Name', post: 'designation/regno' },
    

  ];

  return (
    <div id="team-container" className=''>
      <h1 className='m-3 text-pink text-4xl font-semibold'>OUR TEAM</h1>

      <div className='lg:flex lg:flex-row md:m-36 md:flex-col sm:flex-row sm:m-4 justify-items-center'>
        {details.map((item, index) => (
          <div key={index} className='lg:w-1/3 p-4'>
            <div className='flex flex-col bg-teal rounded-lg text-center h-80 w-70 items-center justify-center'>
              <div className='bg-grey rounded-full w-24 h-24 mx-auto mb-2' />
              <h1 className='font-semibold md:text-2xl sm:text-sm'>{item.name}</h1>
              <h2 className='font-semibold'>{item.post}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:flex lg:flex-row md:m-36 md:flex-col sm:flex-row sm:m-4 justify-items-center'>
        {details.map((item, index) => (
          <div key={index} className='lg:w-1/3 p-4'>
            <div className='flex flex-col bg-teal rounded-lg text-center h-80 w-70 items-center justify-center'>
              <div className='bg-grey rounded-full w-24 h-24 mx-auto mb-2' />
              <h1 className='font-semibold md:text-2xl sm:text-sm'>{item.name}</h1>
              <h2 className='font-semibold'>{item.post}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:flex lg:flex-row md:m-36 md:flex-col sm:flex-row sm:m-4 justify-items-center'>
        {details.map((item, index) => (
          <div key={index} className='lg:w-1/3 p-4'>
            <div className='flex flex-col bg-teal rounded-lg text-center h-80 w-70 items-center justify-center'>
              <div className='bg-grey rounded-full w-24 h-24 mx-auto mb-2' />
              <h1 className='font-semibold md:text-2xl sm:text-sm'>{item.name}</h1>
              <h2 className='font-semibold'>{item.post}</h2>
            </div>
          </div>
        ))}
      </div>

      

      <div className="flex justify-center gap-10">
        <button target="blank" className='h-24 w-32 font-bold rounded-lg bg-grey text-black' onClick={() => window.open('/founding-members', '_blank')}>Founding Members</button>
        <button target="blank" className='h-24 w-32 font-bold rounded-lg bg-grey text-black' onClick={() => window.open('/board-members', '_blank')}>Board Members</button>
        <button target="blank" className='h-24 w-32 font-bold rounded-lg bg-grey text-black' onClick={() => window.open('/ffcs21', '_blank')}>FFCS-21 Members</button>
        <button target="blank" className='h-24 w-32 font-bold rounded-lg bg-grey text-black' onClick={() => window.open('/ffcs22', '_blank')}>FFCS-22 Members</button>
      </div>


    </div>
  ); 
};

export default Team;
