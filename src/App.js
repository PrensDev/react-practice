import React, { Component } from 'react';
import Resume from './resume/resume';
import Footer from './layouts/footer';
import Modals from './resume/modals/modals';

class App extends Component {
  componentDidMount() {
    document.title = "Resume Builder using React - Made by PrensDev"
  }

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
