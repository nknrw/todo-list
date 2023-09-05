import React from 'react';
import TabButton from './TabButton';
import './Tabs.css';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({activeTab, setActiveTab}) => {
  return (
    <div className='tabs'>
      <div>
        <TabButton
          label='All'
          active={activeTab === 'All'}
          onClick={() => setActiveTab('All')}
        />
      </div>
      <div>
        <TabButton
          label='Unfinished'
          active={activeTab === 'Unfinished'}
          onClick={() => setActiveTab('Unfinished')}
        />
      </div>
      <div>
        <TabButton
          label='Finished'
          active={activeTab === 'Finished'}
          onClick={() => setActiveTab('Finished')}
        />
      </div>
    </div>
  );
};

export default Tabs;
