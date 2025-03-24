import React from 'react';
import { Button, Fab } from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  Refresh,
  Search,
  Settings,
} from '@mui/icons-material';
import SearchBar from './searchBar';

export default function Menu(props) {
  const returnHome = () => {
    props.updateSearch('');
    props.toggle(true);
  };

  const btnStyle = {
    borderRadius: '50%',
    color: 'aqua',
  };
  const searchProps = {
    parentClass: 'mx-4 my-3 ',
    className: 'w-[66rem]',
    size: 'small',
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
    <div className="flex">
      <div id="sites" className="flex size-16">
        <Fab style={{ color: 'white', marginLeft: '2rem', marginTop: '5px' }}>
          <Settings />
        </Fab>
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
          SX={searchProps.sx}
          icon={<Search />}
          toggleSearch={props.toggle}
          search={props.updateSearch}
          initialValue={props.initialValue}
        />
        {/* Attribute Link, for the shark icon
        <a href="https://www.flaticon.com/free-icons/shark" title="shark icons">Shark icons created by max.icons - Flaticon</a> */}
        {/* make clickable to return to started window */}
        <img
          onClick={returnHome}
          className="my-3 hover:cursor-pointer"
          src="/images/shark.png"
          alt="Shark Icon"
        />
      </div>
    </div>
  );
}
