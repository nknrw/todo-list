import React from 'react';
import {TaskInputProps} from '../types/types';
import './TaskInput.css';

const TaskInput: React.FC<TaskInputProps> = ({
                                               newTask,
                                               handleNewTaskChange,
                                               addTask,
                                               handleKeyPress,
                                             }) => {
  return (
    <div className='new-task'>
      <input
        className='task-input'
        type='text'
        placeholder='New Task'
        value={newTask}
        onChange={(e) => handleNewTaskChange(e.target.value)}
        onKeyDown={handleKeyPress}
        data-testid='new-task-input'
      />
      <button className='submit-button' onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
