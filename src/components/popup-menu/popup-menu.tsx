import React from 'react';

import "../../styles/index.scss"

interface DataProps {
  fruits: { item: string; id: number }[]
  active: boolean
  selected: any
  setIsActive: (active: boolean) => void
  setSelected: (selected: string) => void
}

const PopupMenu: React.FC<DataProps> = props => {

  const itemClassName = 'popup-menu__item'
  // if (props.selected.length > 0) {
  //   itemClassName += ' popup-menu__item_selected'
  // }

  const elements = props.fruits.map((fruit) => {
    const { item, id } = fruit;

    return (
      <div key={id}
        className={itemClassName}
        onClick={() => {
          props.setSelected(item)
        }}
      >
        {item}
      </div>
    );
  });

  let className = 'popup-menu'
  if (props.active) {
    className += ' popup-menu_active'
  }



  return (
    <div className={className}>
      {elements}
    </div>
  )
}

export default PopupMenu;