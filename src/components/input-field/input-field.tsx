import React from 'react';
import { useState, useRef } from 'react';
import '../../styles/index.scss'

interface MenuProps {
    showMenu(): void
    // setSelected: (selected: string) => void
    onSearchChange: (term: string) => void
    selected: any
    active: boolean
}

const SelectField: React.FC<MenuProps> = props => {
    const [term, setTerm] = useState<string>('')
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
        // props.setSelected('')
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearchChange(term);
    }


    let classNameInput = 'select__input'
    // if (props.selected !== '') {
    //     classNameInput += ' select__input_selected'
    // }

    let classNameArrow = 'select__marks-arrow'
    if (props.active) {
        classNameArrow += ' select__marks-arrow_active'
    }

    const textInput = useRef<HTMLInputElement>(null)
    let placeholderClassName = 'select__placeholder'
    let selectTextClassName = 'select__text'

    if (props.active) {
        textInput.current!.focus();
        placeholderClassName += ' select__placeholder_remove'
        // selectTextClassName += ' select__text_visiable'
    }
    let selectedElClassName = 'select__selected-element'
    let selectContainerClass = 'select__container'

    if (props.selected.length > 0) {
        selectedElClassName += ' select__selected-element_block'
        selectContainerClass += ' select__container_selected'
        placeholderClassName += ' select__placeholder_remove'
    }

    return (
        <div
            className="select"
        >
            <span
                className={selectContainerClass}
                onClick={props.showMenu}
            >
                <span
                    className={selectedElClassName}>
                    {props.selected.join(", ")}
                </span>
                <div
                    className={placeholderClassName}
                >
                    Выберите элемент
                </div>
                <div className="select-wrapper">
                    <input
                        type="text"
                        className={classNameInput}
                        ref={textInput}
                        value={term}
                        onChange={onSearchChange}
                    // onChange={changeHandler}
                    // onKeyPress={keyPressHandler}
                    />
                    <div className={selectTextClassName}>
                        {term}
                    </div>
                </div>
            </span>
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