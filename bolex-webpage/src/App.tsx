import React from 'react';
import './App.css';
import ListGroup from './components/AllComponents';

function App() {
  const menuItems = ["Home", "Page 1", "Page 2"];

  const handleSelectItem = (menuItem: string) => {
    console.log(menuItem);
  }

  return <div><ListGroup menuItems={menuItems} onSelectItem={handleSelectItem}/></div>
}

export default App;
