import React from 'react';
import { useState } from 'react';

interface MenuProps {
    showMenu(): void
}

const InutField: React.FC<MenuProps> = props => {
    const [text, setText] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(text)
            setText('')
        }
    }

    return (
        <div>
            <input
                type="text"
                className="input"
                onChange={changeHandler}
                value={text}
                onKeyPress={keyPressHandler}
                onClick={props.showMenu}
                // onClick={showMenu}
            />
        </div>
    );
}

export default InutField;