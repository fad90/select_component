import React from 'react';

import "../../styles/index.scss"

interface DataProps {
  fruits: { item: string; id: number }[]
  active: boolean
  selected: any
  setIsActive: (active: boolean) => void
  selectMultiple: (selected: string, e: any) => void
  multiple: boolean
  selectOne: (selected: string) => void
}

const PopupMenu: React.FC<DataProps> = props => {

  const itemClassName = 'popup-menu__item'

  const elements = props.fruits.map((fruit) => {
    const { item, id } = fruit;

    return (
      <div key={id}
        className={itemClassName}
        onClick={(e) => {
          (props.multiple) ? props.selectMultiple(item, e) : props.selectOne(item)
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