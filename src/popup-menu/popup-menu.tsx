import React from 'react';
import './popup-menu.css';

interface DataProps {
    fruits: { item: string; id: number; }[]
    active: boolean
}

const PopupMenu:React.FC<DataProps> = props => {
    const elements = props.fruits.map((fruit) => {
        const { item, id } = fruit;
    
        return (
          <div key={id} className="popup-menu__item">
            {item}
          </div>
        );
      });

      let className = 'popup-menu'

      if(props.active) {
        className += ' hide'
      }

    return (
        <ul className={className}>
            {elements}
        </ul>
    )
  }
  
  export default PopupMenu;