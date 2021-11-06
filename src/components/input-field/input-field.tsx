import React from 'react';
import { useState, useRef } from 'react';
import '../../styles/index.scss'

interface MenuProps {
    showMenu(): void
    deleteSelectedItem(): void
    // setSelected: (selected: string) => void
    onSearchChange: (term: string) => void
    selected: any
    active: boolean
}

const SelectField: React.FC<MenuProps> = props => {
    const [term, setTerm] = useState<string>('')

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearchChange(term);
    }


    let classNameArrow = 'select__marks-arrow'
    if (props.active) {
        classNameArrow += ' select__marks-arrow_active'
    }

    const textInput = useRef<HTMLInputElement>(null)
    let placeholderClassName = 'select__placeholder'
    if (props.active) {
        textInput.current!.focus();
        placeholderClassName += ' select__placeholder_remove'
    }
    
    let selectedElClassName = 'select__selected-element'
    let selectContainerClass = 'select__container'
    let inputClassName = 'select__input'

    if (props.selected.length > 0) {
        selectedElClassName += ' select__selected-element_block'
        selectContainerClass += ' select__container_selected'
        placeholderClassName += ' select__placeholder_remove'
        inputClassName += ' select__input_hidden'
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
                        className={inputClassName}
                        ref={textInput}
                        value={term}
                        onChange={onSearchChange}
                    />
                    <div className="select__text">
                        {term}
                    </div>
                </div>
            </span>
            <div className="select__marks">
                <span
                    className="select__marks-cross"
                    onClick={props.deleteSelectedItem}
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