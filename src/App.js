import React, { Component } from 'react';
import Resume from './resume/resume';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <>
        <Resume />
        <Footer />
      </>
    );
  }
}

export default App;
