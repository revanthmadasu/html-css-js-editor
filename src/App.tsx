import React, { useState } from 'react';
import  CodeEditor  from './app/components/code-editor/code-editor';
import  WebView  from './app/components/web-view/web-view';
import Header from './app/components/header/header';
import './App.css';
import './app.scss';

function App() {
  let [userInput, setUserInput] = useState('');
  const onUserInputChange = (newValue: string) => {
    setUserInput(newValue);
  }
  let [renderDocument, setRenderDocument] = useState(userInput);
  const onRun = () => {
    setRenderDocument(userInput);
  }

  const [currentTheme, setThemeToggle] = useState('theme-light');

  const onDownload = () => {
    const anchor = document.createElement("a");
    const file = new Blob([userInput], {type: 'text/html;charset=utf-8'});
    anchor.href = URL.createObjectURL(file);
    anchor.download = "download.html";
    document.body.appendChild(anchor);
    anchor.click();
    console.log('On download action')
    // setRenderDocument(userInput);
  }

  const onThemeChange = () => {
    const updateTheme = (currentTheme === 'theme-light') ? 'theme-dark' : 'theme-light';
    setThemeToggle(updateTheme);
    document.body.className = updateTheme;
  }
  return (
    <div className="App p-4">
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
        <Header onThemeChange={onThemeChange}></Header>
        <div className="row h-100 py-3 panels-section custom-scroll">
          <div className="col-md-6 col-sm-12">
            <CodeEditor currentTheme={currentTheme} onUserInputChange={onUserInputChange} onRun={onRun} onDownload={onDownload}></CodeEditor>
          </div>
          <div className="col-md-6 col-sm-12">
            <WebView renderDocument={renderDocument}></WebView>
          </div>
        </div>
    </div>
  );
}

export default App;
