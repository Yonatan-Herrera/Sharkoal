import React from 'react';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward, Refresh, Search } from '@mui/icons-material';
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
    className: 'w-[42rem]',
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
          SX={searchProps.sx}
          icon={<Search />}
        />
      </div>
    </div>
  );
}
