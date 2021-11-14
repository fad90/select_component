import React from 'react';
import { useState, useRef } from 'react';
import '../../styles/index.scss'
interface MenuProps {
    showMenu(): void
    deleteSelectedItem(): void
    selected: any
    active: boolean
    termInput: string
    setTermInput: (term: string) => void
    multiple: boolean
}

const SelectField: React.FC<MenuProps> = props => {

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        props.setTermInput(term);
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
            <div
                className={selectContainerClass}
                onClick={props.showMenu}
            >
                <span
                    className={selectedElClassName}>
                    {(props.multiple) ? props.selected.join(", ") : props.selected}
                </span>
                <div
                    className={placeholderClassName}
                >
                    Выберите фрукт
                </div>
                <div className="select-wrapper">
                    <input
                        type="text"
                        className={inputClassName}
                        ref={textInput}
                        value={props.termInput}
                        onChange={onSearchChange}
                    />
                    <div className="select__text">
                        {props.termInput}
                    </div>
                </div>
            </div>
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