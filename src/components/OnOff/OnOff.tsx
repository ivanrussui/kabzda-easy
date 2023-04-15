import React, { useState } from 'react';
import styles from './OnOff.module.css';

type OnOffPropsType = {
    // value: boolean
}

// export function OnOff(props: OnOffPropsType) {
//     console.log(props)
//
//     return (
//         <>
//             { props.value && <On title={ 'On' } /> }
//             { !props.value && <Off title={ 'Off' } /> }
//         </>
//     )
// }

export function OnOff(props: OnOffPropsType) {

    let [value, setValue] = useState(false)

    const onStyle = {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: value ? 'green' : 'white',
    }
    const offStyle = {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: value ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: value ? 'green' : 'red',
    }

    const onClickOnHandler = () => {
        setValue(true)
        console.log(value)
    }

    const onClickOffHandler = () => {
        setValue(false)
        console.log(value)
    }

    return (
        <div>
            <div style={onStyle} onClick={ onClickOnHandler }>On</div>
            <div style={offStyle} onClick={ onClickOffHandler }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

// type ItemPropsType = {
//     title: string
// }


// function On(props: ItemPropsType) {
//     // console.log(props)
//     return (
//         <div style={ { display: 'flex' } }>
//             <span className={ styles.GreenSquare }>{ props.title }</span>
//             <span className={ styles.Square }></span>
//             <span className={ styles.GreenCircle }></span>
//         </div>
//     );
// }
//
// function Off(props: ItemPropsType) {
//     return (
//         <div style={ { display: 'flex' } }>
//             <span className={ styles.Square }></span>
//             <span className={ styles.RedSquare }>{ props.title }</span>
//             <span className={ styles.RedCircle }></span>
//         </div>
//     );
// }
