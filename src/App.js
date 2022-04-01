import React, { Component } from 'react';
import Resume from './resume/resume';
import Footer from './components/footer';
import Modals from './resume/modals/modals';

class App extends Component {
  render() {
    return (
      <>
        <Resume />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default App;
