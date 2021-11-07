import React from 'react';
import { useState, useEffect } from 'react';
import SelectField from '../input-field/input-field';
import PopupMenu from '../popup-menu/popup-menu';
import '../../styles/index.scss'


const App: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);
  const [term, setTerm] = useState<string>("");
  const [termInput, setTermInput] = useState<string>("")

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

  const selectItems = (item: string) => {
    const arr = []
    arr.push(item)
    setSelected((selected: any) => [...selected, item])
  }

  const showMenu = () => {
    setIsActive(!isActive);

  }

  const onSearchChange = (term: string) => {
    setTerm(term);
  }

  const deleteSelectedItem = () => {
    setTermInput("")
    setSelected([]);
    setIsActive(false);
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyEnter);

    return function cleanup() {
      window.removeEventListener('keydown', onKeyEnter);
    }
  }, []);
  const onKeyEnter = (event: any) => {
    if (event.code === 'Escape') {
          setIsActive(false)
        }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyEsc);

    return function cleanup() {
      window.removeEventListener('keydown', onKeyEsc);
    }
  }, []);
  const onKeyEsc = (event: any) => {
    if (event.code === 'Enter') {
          setIsActive(true)
        }
  }

  const search = (items: { item: string; id: number }[], term: string) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.item.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  const visibleItems = search(fruitData, term);

  return (
    <div
      className="app"
    >
      <div className="page">
        <SelectField
          showMenu={showMenu}
          selected={selected}
          active={isActive}
          onSearchChange={onSearchChange}
          deleteSelectedItem={deleteSelectedItem}
          termInput={termInput}
          setTermInput={setTermInput}
        />
        <PopupMenu
          fruits={visibleItems}
          active={isActive}
          setIsActive={setIsActive}
          setSelected={selectItems}
          selected={selected}
        />
      </div>
    </div>
  );
}

export default App;