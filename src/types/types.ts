import React from 'react';

export interface Task {
  id: number;
  text: string;
  finished: boolean;
}

export interface TaskInputProps {
  newTask: string;
  handleNewTaskChange: (text: string) => void;
  addTask: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}
