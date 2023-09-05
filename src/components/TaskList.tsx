import React from 'react';
import {TaskListProps} from '../types/types';
import './TaskList.css';

const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask}) => {
  return (
    <div>
      <ul className='task-list'>
        {tasks.map((task) => (
          <li className='task' key={task.id}>
            <label className='checkbox-label'>
              <input
                data-testid='checkbox'
                className='checkbox'
                type='checkbox'
                checked={task.finished}
                onChange={() => toggleTask(task.id)}
              />
              <span className='custom-checkbox'></span>
            </label>
            <p className={`task-text ${task.finished ? 'finished' : ''}`}>{task.text}</p>
            <button className='delete-button' onClick={() => deleteTask(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
