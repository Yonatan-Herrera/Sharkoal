import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../styles/refresh.css';
const RefreshButton: React.FC = () => {
  const properties: React.CSSProperties = {
    position: 'absolute',
    top: '15%',
    left: '20%',
    cursor: 'pointer',
    color: 'white',
    padding: '10px',
  };
  return (
    <div className="refresh" style={properties}>
      <RefreshIcon />
    </div>
  );
};

export default RefreshButton;
