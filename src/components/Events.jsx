import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const bubbleStyle = {
  backgroundColor: '#E1E1E1',
  margin:'6px',
  height:'100px',
//   width:'5px',
  padding: '10px', // Adjust the padding to control the size of the bubble
  borderRadius: '8px', // Add rounded corners for a bubble effect
  color: '#fff', // Text color inside the bubble
};

const Events = () => {
  return (
    <div id="events-container" className='h-[100vh]'>
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
          City A
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
          City B
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
          City C
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
          City C
        </TimelineContent>

        
      </TimelineItem>
      




    </Timeline>

    </div>
  );
};

export default Events;
