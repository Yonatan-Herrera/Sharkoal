import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
import Menu from './components/menu';
import Vid from './components/vid';
function App() {
  // document.addEventListener('click', async () => {
  //   // const response = await window.electronExpose.sendMessage();
  //   console.log(window.electronExpose);
  // });
  // add webview to ensure that we can see website
  return (
    <div className="App  ">
      <Menu />
      <Vid vid="ZVTDEZvFU6k" />
      <SearchBar />
    </div>
  );
}

export default App;
