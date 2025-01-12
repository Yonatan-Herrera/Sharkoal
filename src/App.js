import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
import Tabs from './components/tabs';
import Vid from './components/vid';
function App() {
  // document.addEventListener('click', async () => {
  //   // const response = await window.electronExpose.sendMessage();
  //   console.log(window.electronExpose);
  // });
  // add webview to ensure that we can see website
  return (
    <div className="App  ">
      <Tabs />
      <Vid vid="vPXsanGmQjU" />
      <SearchBar />
    </div>
  );
}

export default App;
