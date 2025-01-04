// import react from 'react';
import { Button, TextField } from '@mui/material';

export default function SearchBar() {
  const search = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <div className="text-black">
      <p>Hello World</p>
      <Button onClick={search} variant="contained">
        Search
      </Button>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </div>
  );
}
