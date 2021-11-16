import React from 'react';
import { useState, useEffect } from 'react';
import SelectField from '../input-field';
import PopupMenu from '../popup-menu';
import Loader from '../loader';
import styles from './app.module.scss'
import '../../useDebounce'
import useDebounce from '../../useDebounce';


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

const App: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[] | string>([]);
  const [termInput, setTermInput] = useState<string>("")
  const [data, setData] = useState<any>(fruitData)
  const [loading, setLoading] = useState<boolean>(false)
  const [multiple, setMultiple] = useState<boolean>(true)

  const debouncedSearchTerm = useDebounce(termInput, 1000);


  const visibleItems = (items: { item: string; id: number }[], termInput: string) => {
    if (termInput.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.item.toLowerCase().includes(termInput.toLowerCase())
    })
  }

  const filteredArray = visibleItems(fruitData, termInput)


  useEffect(() => {
    if (!debouncedSearchTerm) return;
    if (debouncedSearchTerm.length >= 0) {
      const mockServerSearch = (debouncedSearchTerm: string, fruitData: { item: string; id: number }[]) => {
        const isError = Math.round(Math.random())
        const visibleItemsServer = (items: { item: string; id: number }[], debouncedSearchTerm: string) => {
          if (debouncedSearchTerm.length === 0) {
            return items;
          }
          return items.filter((item) => {
            return item.item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          })
        }
        const filteredArrayServer = visibleItemsServer(fruitData, debouncedSearchTerm)

        return new Promise((resolve, reject) => {
          setLoading(true)
          setTimeout(() => {
            if (isError) resolve(filteredArrayServer)
            else reject(new Error("Server search error"))
            setLoading(false)
          }, 2000)
        })
      }
      mockServerSearch(debouncedSearchTerm, fruitData)
        .then((filteredArrayServer) => {
          setData(filteredArrayServer)
        })
        .catch(() => {
          setData(filteredArray)
        })
    }

  }, [debouncedSearchTerm])


  const selectMultiple = (item: string, e: React.MouseEvent<HTMLInputElement>) => {
    const arr = []
    arr.push(item)
    setSelected((selected: any) => [...selected, item])
  }

  const selectOne = (item: string) => {
    setSelected(item)
  }

  const showMenu = () => {
    setIsActive(!isActive);
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
    if (event.code === 'Enter') {
      setIsActive(true)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyEsc);

    return function cleanup() {
      window.removeEventListener('keydown', onKeyEsc);
    }
  }, []);
  const onKeyEsc = (event: any) => {
    if (event.code === 'Escape') {
      setIsActive(false)
    }
  }

  const loader = loading ? <Loader /> : null;
  const popup = !loading ? <PopupMenu
    fruits={data}
    active={isActive}
    setIsActive={setIsActive}
    selectMultiple={selectMultiple}
    selected={selected}
    multiple={multiple}
    selectOne={selectOne}
  /> : null;


  return (
    <div
      className={styles.app}
    >
      <div className={styles.page}>
        <SelectField
          showMenu={showMenu}
          selected={selected}
          active={isActive}
          deleteSelectedItem={deleteSelectedItem}
          termInput={termInput}
          setTermInput={setTermInput}
          multiple={multiple}
        />
        {loader}
        {popup}
      </div>
    </div>
  );
}

export default App;