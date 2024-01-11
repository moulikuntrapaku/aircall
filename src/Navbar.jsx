import React  from 'react';


const Navbar = ({ onButtonClick, selectedButton }) => {
  return (
    <nav>
        <button onClick={() => onButtonClick('inbox')} disabled={selectedButton === 'inbox'}
        style={{ borderBottom: selectedButton === 'inbox' ? '2px solid red' : 'none' }}>
        Inbox
        </button>
        <button onClick={() => onButtonClick('archived')} disabled={selectedButton === 'archived'} 
        style={{ borderBottom: selectedButton === 'archived' ? '2px solid red' : 'none' }}
        >
        Archived
        </button>
  </nav>
  );
};

export default Navbar;