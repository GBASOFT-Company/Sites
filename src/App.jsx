import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';

export class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About  />
        <Contact />
      </div>
    )
  }
}

export default App;
