import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
  };

  return (<>
    <h1 className='logo'>Search_4r_wt_u_want</h1>
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    </>
  );
};

export default SearchBar;
