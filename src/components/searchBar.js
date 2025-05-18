// import react from 'react';
import { TextField, InputAdornment } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

export default function SearchBar(prop) {
  const [searchInput, searchInputUpdate] = useState('');

  useEffect(() => {
    if (prop.initialValue) {
      searchInputUpdate(prop.initialValue);
    }
  }, [prop.initialValue]);

  const search = (event) => {
    if (event.key === 'Enter') {
      prop.search(searchInput);
      prop.toggleSearch(false);
      prop.sitesVisited._add(searchInput);
    }
  };
  const changeHandler = (event) => {
    searchInputUpdate(event.target.value);
  };
  return (
    <div className={prop.DIVClassName}>
      {/* add Icon for the different search engines */}

      <TextField
        className={prop.classname}
        id={prop.ID}
        label={prop.Label}
        variant={prop.Variant}
        value={searchInput}
        onChange={changeHandler}
        onKeyDown={search}
        sx={prop.SX}
        size={prop.SIZE}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment sx={{ color: 'white' }} position="start">
                {prop.icon}
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
}
