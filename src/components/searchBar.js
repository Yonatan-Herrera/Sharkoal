// import react from 'react';
import { TextField, InputAdornment } from '@mui/material';
import React from 'react';
import { useState } from 'react';
export default function SearchBar(prop) {
  const [searchInput, searchInputUpdate] = useState('');

  const search = (event) => {
    if (event.key === 'Enter') {
      prop.search(searchInput);
      prop.toggleSearch(false);
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
