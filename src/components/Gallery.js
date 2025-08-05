import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a4cf6b7daf?auto=format&fit=crop&w=400&q=80',
  // Add your own images here!
];

function Gallery() {
  return (
    <section className="page-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="gallery-img"/>
        ))}
      </div>
      <p style={{ color: '#aaa', marginTop: '18px' }}>
        More photos and videos coming soon!
      </p>
    </section>
  );
}

export default Gallery;