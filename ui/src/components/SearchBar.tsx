import { useState, useEffect } from 'react';
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar: React.FC = () => {
  const [searchQuery, updateSearchQuery] = useState<string>('');

  // Handles Search Query Change
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateSearchQuery(event.target.value);
  };

  // Handles Searching on Enter
  useEffect(() => {
    const searchBar = document.getElementById('search-bar');
    searchBar?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        console.log('search', searchQuery);
      }
    });
    return () => {
      searchBar?.removeEventListener('keydown', () => {});
    };
  }, [searchQuery]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh',
        backgroundColor: '#26516f',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0px 2px 4px #491935',
        borderRadius: '20px',
        marginBottom: '20px',
      }}
    >
      <TextField
        id="search-bar"
        sx={{
          width: '50vw',
          borderColor: 'white',
          '& .MuiOutlinedInput-root': {
            color: 'white',
            borderRadius: '20px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': { color: 'white' },
        }}
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      ></TextField>
    </div>
  );
};

export default SearchBar;
