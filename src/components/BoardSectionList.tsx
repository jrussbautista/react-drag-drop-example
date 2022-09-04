import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { BOARD_SECTIONS } from '../constants';
import BoardSection from './BoardSection';
import { Status, Task } from '../types';
import { INITIAL_TASKS } from '../data';

const BoardSectionList = () => {
  const [tasks] = useState<Task[]>(INITIAL_TASKS);

  const getTasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {BOARD_SECTIONS.map((boardSection) => (
          <Grid item xs={4}>
            <BoardSection
              key={boardSection.id}
              section={boardSection}
              tasks={getTasksByStatus(boardSection.name)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardSectionList;
