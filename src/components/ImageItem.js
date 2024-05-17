import React, { useState } from 'react';


const ImageItem = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="image-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image.urls.small} alt={image.alt_description} />
      {hovered && (
        <div className="image-item-details">
          <p>{image.description || 'No description'}</p>
          <a href={image.links.html} target="_blank" rel="noopener noreferrer">
            View on Unsplash
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
