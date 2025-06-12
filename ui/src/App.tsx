import './App.css';
import SearchBar from './components/SearchBar';
import RefreshButton from './components/refresh';
import { useState } from 'react';
// Use LocalStorage to store the state of the search query...

function App() {
  const [home, setHome] = useState<boolean>(false);
  return (
    <div>
      <div>
        <RefreshButton />
        <SearchBar toggle={setHome} />
      </div>
      {!home && <div style={{ width: '100%', height: '81.3vh' }}> </div>}
      {home && (
        <div style={{ width: '100%', height: '81.3vh' }}>
          <webview
            style={{ width: '100%', height: '100%' }}
            src="https://google.com"
          ></webview>
        </div>
      )}
    </div>
  );
}

export default App;
