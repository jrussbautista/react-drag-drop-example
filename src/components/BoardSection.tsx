import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BoardSection as BoardSectionType, Task } from '../types';
import TaskItem from './TaskItem';

type BoardSectionProps = {
  section: BoardSectionType;
  tasks: Task[];
};

const BoardSection = ({ section, tasks }: BoardSectionProps) => {
  return (
    <Box sx={{ backgroundColor: '#eee', padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {section.title}
      </Typography>
      {tasks.map((task) => (
        <Box key={task.id} sx={{ mb: 2 }}>
          <TaskItem task={task} />
        </Box>
      ))}
    </Box>
  );
};

export default BoardSection;
