// import react from 'react';
import { TextField, Input, FormControl, InputLabel } from '@mui/material';
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
      />
    </div>
  );
}
