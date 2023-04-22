import React from 'react';

type OnOffPropsType = {
  on: boolean
  // setOn: (on: boolean) => void
  onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    // const onClickOnHandler = () => {
    //     props.setOn(true)
    //     // console.log(props.on)
    // }
    //
    // const onClickOffHandler = () => {
    //     props.setOn(false)
    //     // console.log(props.on)
    // }

    return (
        <div>
            <div style={onStyle}
                 // onClick={ onClickOnHandler }
                 onClick={ () => props.onClick(true) }
            >On</div>
            <div style={offStyle}
                 // onClick={ onClickOffHandler }
                 onClick={ () => props.onClick(false) }
            >Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
