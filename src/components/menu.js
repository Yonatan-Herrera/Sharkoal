import React from 'react';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward, Refresh } from '@mui/icons-material';
import SearchBar from './searchBar';
export default function Menu(props) {
  const btnStyle = {
    borderRadius: '50%',
  };

  return (
    <div className="sticky  flex">
      <div id="sites" className="flex size-16 ">
        <Button style={btnStyle}>
          <ArrowBack />
        </Button>
        <Button style={btnStyle}>
          {' '}
          <ArrowForward />
        </Button>
        <Button style={btnStyle}>
          {' '}
          <Refresh />
        </Button>
        {/* add custimazble search bar */}
        <SearchBar />
      </div>
    </div>
  );
}
