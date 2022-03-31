import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Counters />
      </>
    );
  }
}

export default App;
