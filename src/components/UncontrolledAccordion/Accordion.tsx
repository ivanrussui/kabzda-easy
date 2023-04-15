import React, { useState } from 'react';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // debugger
    // console.log('Accordion rendering')
    // if (props.collapsed) {

    let [collapsed, setCollapsed] = useState(true)

    const onClickToggleHandler = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <>
            <AccordionTitle title={ props.titleValue } />
            <button onClick={onClickToggleHandler}>TOGGLE</button>
            { !collapsed && <AccordionBody /> }
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // debugger
    // console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    // console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;