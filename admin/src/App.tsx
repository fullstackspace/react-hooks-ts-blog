import React from 'react';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <div>
      {console.log(process.env.REACT_APP_NODE_ENV)}
      <Main />
    </div>
  );
}

export default App;
