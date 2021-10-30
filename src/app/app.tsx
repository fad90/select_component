import React from 'react';
import { useState } from 'react';
import InutField from '../input-field/input-field';
import PopupMenu from '../popup-menu/popup-menu';


const App:React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const fruitData = [
    { item: "apple", id: 1 },
    { item: "blueberry", id: 2 },
    { item: "grape", id: 3 },
    { item: "banana", id: 4 },
    { item: "peach", id: 5 },
    { item: "pineapple", id: 6 },
    { item: "nectarine", id: 7 },
    { item: "strawberry", id: 8 },
  ];

  const showMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="app">
      <InutField showMenu={showMenu} />
      <PopupMenu  fruits={fruitData} active={isActive}/>
    </div>
  );
}

export default App;