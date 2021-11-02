import React from 'react';
import "../../styles/index.scss"

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
        className += ' active'
      }

    return (
        <div className={className}>
            {elements}
        </div>
    )
  }
  
  export default PopupMenu;