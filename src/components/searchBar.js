// import react from 'react';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
export default function SearchBar() {
  const search = () => {
    window.location.href = 'https://google.com/search?q=' + searchInput;
  };
  const [searchInput, searchInputUpdate] = useState('');
  function InputHandlerer(event) {
    searchInputUpdate(event.target.value);
    // console.log(event.target.value);
    // search(searchInput);
  }
  return (
    <div className="text-black relative my-4 ">
      {/* add Icon for the different search engines */}

      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchInput}
        onChange={InputHandlerer}
      />
      <Button onClick={search} variant="contained">
        Search
      </Button>
    </div>
  );
}
