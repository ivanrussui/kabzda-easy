import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating';

function App() {
    // debugger

    return (
        <div className="App">
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Submenu'}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function Hello() {
    debugger
    alert('Hello');
}

// Hello()

export default App;
