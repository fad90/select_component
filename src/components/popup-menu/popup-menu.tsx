import React from 'react';
import styles from './popup-menu.module.scss';
import { DataProps } from '../../types';


const PopupMenu: React.FC<DataProps> = props => {
  const itemClassName = `${styles.item}`

  // if(props.highlight) {
  //   itemClassName += ' highlight'
  // }

  const elements = props.fruits.map((fruit) => {
    const { item, id } = fruit;

    return (
      <div key={id}
        // className={(props.highlight) ? 'popup-menu__item highlight' : 'popup-menu__item'}
        className={itemClassName}
        onClick={(e) => {
          (props.multiple) ? props.selectMultiple(item, e) : props.selectOne(item)
        }}
      >
        {item}
      </div>
    );
  });

  // let className = 'popup-menu'
  // if (props.active) {
  //   className += ' popup-menu_active'
  // }
  let className = `${styles.popup}`
  if (props.active) {
    className += ` ${styles.active}`
  }

  return (
    <div className={className}>
      {elements}
    </div>
  )
}

export default PopupMenu;