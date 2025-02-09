import './App.css';
import React from 'react';
import { useState } from 'react';
import SearchBar from './components/searchBar';
import Menu from './components/menu';
import { Google } from '@mui/icons-material';
function App() {
  // document.addEventListener('click', async () => {
  //   // const response = await window.electronExpose.sendMessage();
  //   console.log(window.electronExpose);
  // });
  // add webview to ensure that we can see website

  const [webView, webViewUpdate] = useState(true);
  const [webSearch, webSearchUpdate] = useState('');
  const properties = {
    parentClass: 'text-black relative my-4 ',
    className: 'size-[40rem] ',
    id: 'outlined-basic',
    label: 'Search',
    variant: 'outlined',
    sx: {
      '& .MuiOutlinedInput-root': {
        color: '#fff',

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'aqua',
        },
        '&:hover:not(.Mui-focused)': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'seagreen',
          },
        },
        '&.Mui-focused': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'aqua',
          },
        },
      },

      '& .MuiInputLabel-outlined': {
        color: 'aqua',
        '&.Mui-focused': {
          color: 'aqua',
        },
      },
      '&:hover:not(.Mui-focused)': {
        '& .MuiInputLabel-outlined': {
          color: 'seagreen',
        },
      },
      '& .Mui-focused': {
        color: 'aqua',
      },
    },
  };

  return (
    <div className="App ">
      <Menu toggle={webViewUpdate} updateSearch={webSearchUpdate} />
      {(webView && (
        <>
          <p className="text-white font-bold my-16 text-4xl"> Sharkoal </p>
          <SearchBar
            DIVClassName={properties.parentClass}
            classname={properties.className}
            ID={properties.id}
            Label={properties.label}
            Variant={properties.variant}
            SX={properties.sx}
            icon={<Google />}
            toggleSearch={webViewUpdate}
            search={webSearchUpdate}
          />
        </>
      )) || (
        <webview
          id="webSearch"
          className="h-[100vh] w-[100wh]"
          src={'https://google.com/search?q=' + webSearch}
        />
      )}
    </div>
  );
}

export default App;
