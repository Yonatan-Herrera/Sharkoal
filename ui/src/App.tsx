import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

// Use LocalStorage to store the state of the search query...

function App() {
  const [home, setHome] = useState<boolean>(false);
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div style={{ width: '100%', height: '85vh' }}> </div>
      {home && (
        <div style={{ width: '100%', height: '85vh' }}>
          <webview
            style={{ width: '100%', height: '100%' }}
            src="https://google.com/search?"
          ></webview>
        </div>
      )}
    </div>
  );
}

export default App;
