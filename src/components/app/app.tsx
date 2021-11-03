import React from 'react';
import { useState } from 'react';
import SelectField from '../input-field/input-field';
import PopupMenu from '../popup-menu/popup-menu';
import '../../styles/index.scss'


const App: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  // const [term, setTerm] = useState<string>("");

  const fruitData = [
    { item: "Apple", id: 1 },
    { item: "Blueberry", id: 2 },
    { item: "Grape", id: 3 },
    { item: "Banana", id: 4 },
    { item: "Peach", id: 5 },
    { item: "Pineapple", id: 6 },
    { item: "Nectarine", id: 7 },
    { item: "Strawberry", id: 8 },
  ];

  const showMenu = () => {
    setIsActive(!isActive)
  }

  // const search = (items:{ item: string; id: number }[], term:string) => {
  //   if(term.length === 0) {
  //     return items;
  //   }
  //   return items.filter((item) => {
  //     return item.item.indexOf(term) > -1;
  //   })
  // }

  // const visibleItems = search(fruitData, term);

  return (
    <div className="app">
      <SelectField 
      showMenu={showMenu} 
      selected={selected} 
      active={isActive}
      setSelected={setSelected}
      />
      <PopupMenu 
      fruits={fruitData} 
      active={isActive} 
      setIsActive={setIsActive}
      setSelected={setSelected} 
      />
    </div>
  );
}

export default App;