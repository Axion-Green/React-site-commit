import React, { useState, useEffect } from 'react';

const Grid = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Substitua a URL abaixo pela localização do seu arquivo db.json
    fetch('http://localhost:3001/images')
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
      })
      .catch((error) => console.error('Erro ao carregar dados do JSON:', error));
  }, []);

  return (
    <div className="parent">
      {imageData.map((imageUrl, index) => (
        <div key={index} className={`div${index + 1}`}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
