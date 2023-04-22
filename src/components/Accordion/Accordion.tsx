import React from 'react';

type AccordionPropsType = {
  titleValue: string
  accordionCollapsed: boolean
  setAccordionCollapsed: (accordionCollapsed: boolean) => void
}


function Accordion(props: AccordionPropsType) {
  // debugger
const onClickHandler = () => {
  // console.log(props.accordionCollapsed)
  props.setAccordionCollapsed(!props.accordionCollapsed)
}
  // console.log('Accordion rendering')
  // if (props.collapsed) {
  return (
      <>
        <AccordionTitle title={props.titleValue} onClick={onClickHandler} />
        {props.accordionCollapsed && <AccordionBody />}
        {/*{!props.collapsed && <AccordionBody />}*/}
      </>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  // debugger
  // console.log('AccordionTitle rendering')
  return <h3 onClick={props.onClick}>{props.title}</h3>
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

export default Accordion;