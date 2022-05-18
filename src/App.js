import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StaffView from './view/StaffView';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <StaffView></StaffView>
        </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
