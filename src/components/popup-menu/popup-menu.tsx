import React from 'react';
import "../../styles/index.scss"

interface DataProps {
  fruits: { item: string; id: number }[]
  active: boolean
  setIsActive: (active: boolean) => void
  setSelected: (selected: string) => void
  // setSelected: (event:React.MouseEvent) => void
}

const PopupMenu: React.FC<DataProps> = props => {
  const elements = props.fruits.map((fruit) => {
    const { item, id } = fruit;

    return (
      <div key={id}
        className="popup-menu__item"
        onClick={() => {
          props.setSelected(item)
          // props.setIsActive(false)
        }}
      >
        {item}
      </div>
    );
  });

  let className = 'popup-menu'

  if (props.active) {
    className += ' active'
  }

  return (
    <div className={className}>
      {elements}
    </div>
  )
}

export default PopupMenu;