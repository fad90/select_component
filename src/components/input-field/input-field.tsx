import React from 'react';
import { useState } from 'react';
import '../../styles/index.scss'

interface MenuProps {
    showMenu(): void
    setSelected: (selected: string) => void
    selected: string
    active: boolean
}

const SelectField: React.FC<MenuProps> = props => {
    // const [text, setText] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value)
    // }

    // const keyPressHandler = (event: React.KeyboardEvent) => {
    //     if (event.key === 'Enter') {
    //         console.log(text)
    //         setText('')
    //     }
    // }
    const deleteSelectedItem = () => {
        props.setSelected('')
    }

    let classNameInput = 'select__input'
    if (props.selected !== '') {
        classNameInput += ' select__input_selected'
    }

    let classNameArrow = 'select__marks-arrow'
    if (props.active) {
        classNameArrow += ' select__marks-arrow_active'
    }

    return (
        <div className="select">
            <input
                type="text"
                className={classNameInput}
                // onChange={changeHandler}
                defaultValue={props.selected}
                // onKeyPress={keyPressHandler}
                onClick={props.showMenu}
                placeholder="All Fruits"
            />
            <div className="select__marks">
                <span
                    className="select__marks-cross"
                    onClick={deleteSelectedItem}
                >
                    ×
                </span>
                <span
                    className={classNameArrow}
                    onClick={props.showMenu}
                >
                </span>
            </div>
        </div>
    );
}

export default SelectField;