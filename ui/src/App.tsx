import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
function App() {
  return (
    <div>
      <SearchBar />
      <div>
        <webview src="https://google.com/search?"></webview>
      </div>
    </div>
  );
}

export default App;
