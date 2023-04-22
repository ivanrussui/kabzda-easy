import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { OnOff } from './components/OnOff/OnOff';

function App() {
  // debugger

  const [ ratingValue, setRatingValue ] = useState<RatingValueType>(0);
  const [ accordionCollapsed, setAccordionCollapsed ] = useState<boolean>(true);
  const [ on, setOn ] = useState<boolean>(false);

  return (
      <div className="App">
        {/*<PageTitle title={'This is App Component'}/>*/}
        {/*<PageTitle title={'My Component'}/>*/}
        {/*Article 1*/}
        {/*<Accordion titleValue={'Submenu'} collapsed={false} />*/}
        {/*Article 2*/}

        {/*<OnOff*/}
        {/*    // setOn={setOn}*/}
        {/*    onClick={setOn}*/}
        {/*    on={on} />*/}

        <UncontrolledOnOff onChange={setOn} /> {on.toString()}
        {/*<Rating value={3}/>*/}
        <Rating value={ratingValue} onClick={setRatingValue} />
        <UncontrolledRating />
        <Accordion titleValue={'Menu'}
                   // setAccordionCollapsed={setAccordionCollapsed}
                   setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                   accordionCollapsed={accordionCollapsed}
        />
        <UncontrolledAccordion titleValue={'Menu'} />
        {/*<UncontrolledAccordion titleValue={'Submenu'} />*/}
        {/*<UncontrolledRating />*/}
        {/*<UncontrolledRating />*/}
        {/*<UncontrolledRating />*/}
        {/*<OnOff value={true} />*/}
        {/*<OnOff value={false} />*/}
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h2>{props.title}</h2>
}


function Hello() {
  debugger
  alert('Hello');
}

// Hello()

export default App;
