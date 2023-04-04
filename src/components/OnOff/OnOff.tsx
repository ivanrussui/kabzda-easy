import React from 'react';
import styles from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean
}

export function OnOff(props: OnOffPropsType) {
    console.log(props)

    return (
        <>
            { props.value && <On title={ 'On' } /> }
            { !props.value && <Off title={ 'Off' } /> }
        </>
    )
}

type ItemPropsType = {
    title: string
}


function On(props: ItemPropsType) {
    // console.log(props)
    return (
        <div style={ { display: 'flex' } }>
            <span className={ styles.GreenSquare }>{ props.title }</span>
            <span className={ styles.Square }></span>
            <span className={ styles.GreenCircle }></span>
        </div>
    );
}

function Off(props: ItemPropsType) {
    return (
        <div style={ { display: 'flex' } }>
            <span className={ styles.Square }></span>
            <span className={ styles.RedSquare }>{ props.title }</span>
            <span className={ styles.RedCircle }></span>
        </div>
    );
}
