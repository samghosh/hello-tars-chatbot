import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const chatbotStyles = {
    width: '400px',
    height: '620px',
    boxShadow: '0 20px 80px rgba(0,0,0,.6)',
    borderRadius: '5px',
    overflow: 'hidden',
    border: 'none'
  };

  const chatboxImageLocation = 'data:image/png;base64,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';

  const handleClick = () => {
    setShowChatbot(!showChatbot);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <img src={chatboxImageLocation} alt="hello tars chatbot" className="hello-tars-chatbot" onClick={handleClick} />

        {showChatbot && (
          <div className="hello-tars-chatbot-container">
             <iframe src="https://chatbot.hellotars.com/conv/Ey2sGI/" style={chatbotStyles} title='tars-chatbot'></iframe>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
