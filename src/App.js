import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
import Vid from './components/vid';
function App() {
  // document.addEventListener('click', async () => {
  //   // const response = await window.electronExpose.sendMessage();
  //   console.log(window.electronExpose);
  // });
  return (
    <div className="App  ">
      <Vid vid="YkGRfvn3RUU" />
      <SearchBar />
    </div>
  );
}

export default App;
