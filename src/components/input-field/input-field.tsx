import React from 'react';
import { useState } from 'react';
import '../../styles/index.scss'

interface MenuProps {
    showMenu(): void
    selected: string
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
    let className = 'select__input'
    if(props.selected !== '') {
        className += ' selected'
    }

    return (
        <div className="select">
            <input
                type="text"
                className={className}
                // onChange={changeHandler}
                value={props.selected}
                // onKeyPress={keyPressHandler}
                onClick={props.showMenu}
                placeholder="All Fruits"
            />
            <div className="select__marks">
                <span className="select__marks-cross">×</span>
                <span className="select__marks-arrow"></span>
            </div>
        </div>
    );
}

export default SelectField;