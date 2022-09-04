export type Status = 'backlog' | 'in progress' | 'done';

export type BoardSection = {
  id: number;
  name: Status;
  title: string;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
};
