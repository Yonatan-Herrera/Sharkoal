// import react from 'react';
import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
export default function SearchBar() {
  const [searchInput, searchInputUpdate] = useState('');

  const search = (event) => {
    if (event.key === 'Enter') {
      window.location.href = 'https://google.com/search?q=' + searchInput;
    }
  };
  const changeHandler = (event) => {
    searchInputUpdate(event.target.value);
  };
  return (
    <div className="text-black relative my-4 ">
      {/* add Icon for the different search engines */}

      <TextField
        className="size-[40rem] "
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchInput}
        onChange={changeHandler}
        onKeyDown={search}
        sx={{
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
            color: 'seagreen',
          },
        }}
      />
    </div>
  );
}
