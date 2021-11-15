import React from 'react';
import { useState, useRef } from 'react';
import styles from './input-field.module.scss';
import { MenuProps } from '../../types';


const SelectField: React.FC<MenuProps> = props => {

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        props.setTermInput(term);
    }

    let classNameArrow = `${styles.arrow}`
    if (props.active) {
        classNameArrow += ` ${styles.active}`
    }

    const textInput = useRef<HTMLInputElement>(null)
    let placeholderClassName = `${styles.placeholder}`
    if (props.active) {
        textInput.current!.focus();
        placeholderClassName += ` ${styles.hide}`
    }

    let selectedElClassName = `${styles.selected_el}`
    let selectContainerClass = `${styles.container}`
    let inputClassName = `${styles.input}`

    if (props.selected.length > 0) {
        selectedElClassName += ` ${styles.selected_block}`
        selectContainerClass += ` ${styles.selected}`
        placeholderClassName += ` ${styles.hide}`
        inputClassName += ` ${styles.input_hidden}`
    }

    return (
        <div
            className={styles.select}
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
                <div className={styles.wrapper}>
                    <input
                        type="text"
                        className={inputClassName}
                        ref={textInput}
                        value={props.termInput}
                        onChange={onSearchChange}
                    />
                    <div className={styles.text}>
                        {props.termInput}
                    </div>
                </div>
            </div>
            <div className={styles.marks}>
                <span
                    className={styles.cross}
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