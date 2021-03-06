import React, { Component } from 'react';
import Form from './components/Form'
import showResults from './showResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Registration form</h1>
        </header>
        <div className="App-intro">
          <Form onSubmit={showResults}/>
        </div>
      </div>
    );
  }
}

export default App;
