import React from 'react';
import {TabButtonProps} from '../types/types';
import './TabButton.css';

const TabButton: React.FC<TabButtonProps> = ({label, active, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${active ? 'active' : 'inactive'}`}
    >
      {label}
    </button>
  );
};

export default TabButton;
