// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import ImageGrid from './components/ImageGrid';
// import useFetchImages from './hooks/useFetchImages'; // Ensure the import path is correct
// import './App.css'

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const { images, loading, totalPages } = useFetchImages(query, page);

//   const handleSearch = (searchQuery) => {
//     setQuery(searchQuery);
//     setPage(1); // Reset to first page on new search
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <SearchBar onSearch={handleSearch} />
//       {loading ? <div>Loading...</div> : <ImageGrid images={images} />}
//       {images.length > 0 && !loading && page < totalPages && (
//         <button onClick={() => setPage((prevPage) => prevPage + 1)}>Load More</button>
//       )}
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import useFetchImages from './hooks/useFetchImages';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { images, loading, totalPages } = useFetchImages(query, page);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); // Reset to first page on new search
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {loading ? <div>Loading...</div> : <ImageGrid images={images} />}
      {images.length > 0 && !loading && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
          <span>{page} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default App;

