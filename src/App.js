import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input placeholder={'请输入内容'} onChange={(value)=> console.log('输入内容', value)}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1 className='title'>这是标题</h1>
          <text className='desc'>我的第一个React项目</text>
        </header>
      </div>
    );
  }
}

export default App;
