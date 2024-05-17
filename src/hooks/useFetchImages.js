import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchImages = (query, page) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query, page, per_page: 10 },
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
          }
        });
        setImages((prevImages) => (page === 1 ? response.data.results : [...prevImages, ...response.data.results]));
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  return { images, loading, totalPages };
};

export default useFetchImages;
