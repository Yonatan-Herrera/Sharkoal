import React from 'react';
import { TextField } from '@mui/material';

const SearchBar: React.FC = () => {
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
      }}
    >
      <TextField
        sx={{
          width: '50vw',
          borderColor: 'white',
          '& .MuiOutlinedInput-root': {
            color: 'white',
            borderRadius: '20px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': { color: 'white' },
        }}
        label="Search"
        variant="outlined"
      ></TextField>
    </div>
  );
};

export default SearchBar;
