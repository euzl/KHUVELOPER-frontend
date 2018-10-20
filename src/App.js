import React, { Component } from 'react';
import './App.css';

const sampleText = " printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'"
const text = sampleText.split('');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KHUVELOPER PROJECT</h1>
        <div className="text-area">
          {text.map((item, i) => (
            <span style={{
              color: `rgb(${i/2},${i/2},${i/2})`
            }}>{item}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
