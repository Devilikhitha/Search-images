import React from 'react';
import ImageItem from './ImageItem';

const ImageGrid = ({ images }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
