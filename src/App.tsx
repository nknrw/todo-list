import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs'; // Импортируйте компонент Tabs
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import {Task} from './types/types';

const App: React.FC = () => {
  const savedTasks = localStorage.getItem('tasks');
  const initialTasks: Task[] = savedTasks ? JSON.parse(savedTasks) : [];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj: Task = {
        id: Date.now(),
        text: newTask,
        finished: false,
      };

      // Вставляем новую задачу в начало текущего списка задач
      const updatedTasks = [newTaskObj, ...tasks];
      setTasks(updatedTasks);
      setNewTask('');

      // Сохраняем обновленный список задач в локальное хранилище
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? {...task, finished: !task.finished} : task
    );
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const unfinishedTasks = tasks.filter((task) => !task.finished);
  const finishedTasks = tasks.filter((task) => task.finished);

  let displayedTasks: Task[] = tasks;
  if (activeTab === 'Unfinished') {
    displayedTasks = unfinishedTasks;
  } else if (activeTab === 'Finished') {
    displayedTasks = finishedTasks;
  }

  return (
    <div className='App'>
      <Header/>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <TaskInput
        newTask={newTask}
        handleNewTaskChange={(text) => setNewTask(text)}
        addTask={addTask}
        handleKeyPress={handleKeyPress}
      />

      <TaskList
        tasks={displayedTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
