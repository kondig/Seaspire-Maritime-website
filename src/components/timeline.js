import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function SmTimeline() {
  return (
    <React.Fragment>
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            New Site
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2021 Oct. 12</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Announcement
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2021 Feb. 12</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Praesent ullamco distinctio vel nemo bibendum perspiciatis minus autem odit tempore a occaecati! Lobortis pellentesque quisque. 
            Ornare! Accusantium necessitatibus purus interdum! Tristique conubia ducimus mollis pellentesque interdum natus cupiditate, perferendis minim venenatis!
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2020 Mar. 9</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus ipsum, feugiat in ligula ut, elementum pharetra sapien. 
            Proin euismod, nibh id tempor sollicitudin, urna libero elementum orci, sed pharetra sapien augue luctus elit. 
            Etiam vulputate eget lorem tristique mattis. Suspendisse ut augue dolor. Suspendisse finibus nisi congue, blandit mi ut, interdum nisi.
            Nunc sit amet elementum diam. Integer posuere ipsum in congue interdum. Praesent tempor fringilla lectus in faucibus. 
            In erat dui, bibendum sit amet orci vitae, commodo accumsan nunc.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2020 Dec. 9</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}

export {SmTimeline}
