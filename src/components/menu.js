import React from 'react';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward, Refresh } from '@mui/icons-material';
import SearchBar from './searchBar';
// properties for the search bar
/* DIVClassName={properties.parentClass}
        classname={properties.className}
        ID={properties.id}
        Label={properties.label}
        Variant={properties.variant}
        SX={properties.sx} */
export default function Menu(props) {
  const btnStyle = {
    borderRadius: '50%',
    color: 'aqua',
  };
  const searchProps = {
    parentClass: 'mx-4 my-3',
    className: 'w-full',
    size: 'small',
  };

  return (
    <div className="sticky  flex">
      <div id="sites" className="flex size-16 ">
        <Button
          style={{ borderRadius: '50%', marginLeft: '1rem', color: 'aqua' }}
        >
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
        <SearchBar
          DIVClassName={searchProps.parentClass}
          classname={searchProps.className}
          SIZE={searchProps.size}
        />
      </div>
    </div>
  );
}
