import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textlabel from './components/Textlabel';

function App() {
    return (
        <>
        
       <Navbar title="textutis" about="About us" />
       <Textlabel />
       </>
    );
}

export default App;
