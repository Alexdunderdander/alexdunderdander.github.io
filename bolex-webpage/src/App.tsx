import React, { useState } from 'react';
import './App.css';
import {ListGroup, ContentGroup} from './components/AllComponents';

function App() {
  const menuItems = ["Home", "Page 1", "Page 2"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
  }

  return (
    <div className="content-container">
      <ListGroup menuItems={menuItems} onSelectItem={handleSelectItem} selectedIndex={selectedIndex}/>
      <ContentGroup items={menuItems} onSelectItem={handleSelectItem} selectedIndex={selectedIndex}/>
      {/* <ContentGroup /> */}
    </div> 
  )
}

export default App;
