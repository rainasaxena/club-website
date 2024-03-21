import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const bubbleStyle = {
  backgroundColor: '#149f98',
  margin: '6px',
  height: '100px',
  //   width:'5px',
  padding: '10px', // Adjust the padding to control the size of the bubble
  borderRadius: '8px', // Add rounded corners for a bubble effect
  color: '##0D232E', // Text color inside the bubble
};

const Events = () => {
  return (
    <div id="events-container" className='mb-32 px-40'>
      <h1 className='text-lg font-semibold text-pink md:text-4xl mb-[20px]'>EVENTS</h1>

      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: '#149F98',
                width: '50px',
                height: '50px',
              }}
            />
            <TimelineConnector
              sx={{
                backgroundColor: '#149F98',
                width: '20px',
                height: '12px',
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={bubbleStyle}>
            <div>
              <h1 className='text-[#0F1922] font-bold text-xl'>City A</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque architecto ut laudantium quis at quisquam eos atque sapiente soluta!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                backgroundColor: '#149F98',
                width: '20px',
                height: '12px',
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={bubbleStyle}>
            <div>
              <h1 className='text-[#0F1922] font-bold text-xl'>City A</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque architecto ut laudantium quis at quisquam eos atque sapiente soluta!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                backgroundColor: '#149F98',
                width: '20px',
                height: '12px',
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={bubbleStyle}>
            <div>
              <h1 className='text-[#0F1922] font-bold text-xl'>City A</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque architecto ut laudantium quis at quisquam eos atque sapiente soluta!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                backgroundColor: '#149F98',
                width: '20px',
                height: '12px',
              }}
            />
            <TimelineDot
              sx={{
                backgroundColor: '#149F98',
                width: '50px',
                height: '50px',
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={bubbleStyle}>
            <div>
              <h1 className='text-[#0F1922] font-bold text-xl'>City A</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque architecto ut laudantium quis at quisquam eos atque sapiente soluta!
              </p>
            </div>
          </TimelineContent>


        </TimelineItem>





      </Timeline>

    </div>
  );
};

export default Events;
