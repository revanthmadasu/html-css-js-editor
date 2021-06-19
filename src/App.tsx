import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import { CodeEditor } from './components/code-editor/code-editor.tsx';
import  CodeEditor  from './app/components/code-editor/code-editor';
import  WebView  from './app/components/web-view/web-view';

import './App.css';

function App() {
  let [userInput, setUserInput] = useState('');
  const onUserInputChange = (newValue: string) => {
    setUserInput(newValue);
  }
  let [renderDocument, setRenderDocument] = useState(userInput);
  const onRun = () => {
    setRenderDocument(userInput);
  }

  const onDownload = () => {
    console.log('On download action')
    // setRenderDocument(userInput);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
        <div className="row h-100">
          <div className="col-6">
            <CodeEditor onUserInputChange={onUserInputChange} onRun={onRun} onDownload={onDownload}></CodeEditor>
          </div>
          <div className="col-6">
            <WebView renderDocument={renderDocument}></WebView>
          </div>
        </div>
    </div>
  );
}

export default App;
