import React from 'react';
import Home from './components/home/Home'
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
