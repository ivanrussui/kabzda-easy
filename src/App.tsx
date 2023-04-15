import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/Accordion';

function App() {
    // debugger

    return (
        <div className="App">
            {/*<PageTitle title={'This is App Component'}/>*/}
            {/*<PageTitle title={'My Component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true} />*/}
            {/*<Accordion titleValue={'Submenu'} collapsed={false} />*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Submenu'} />
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
