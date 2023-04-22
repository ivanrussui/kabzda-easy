import React, { useState } from 'react';

type OnOffPropsType = {
  onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {

  let [ value, setValue ] = useState(false)

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
    props.onChange(true)
    // console.log(value)
  }

  const onClickOffHandler = () => {
    setValue(false)
    props.onChange(false)
    // console.log(value)
  }

  return (
      <div>
        <div style={onStyle} onClick={onClickOnHandler}>On</div>
        <div style={offStyle} onClick={onClickOffHandler}>Off</div>
        <div style={indicatorStyle}></div>
      </div>
  )
}

