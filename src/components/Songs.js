import React from 'react';

const songs = [
  {
    title: 'Raat Bhar Tuu',
    description: 'When the city sleeps our heart beats louder.',
    credits: ' Akshat , Havan , Adarsh , Varun, Gaurav',
    date: 'Releasing soon'
  },

 // <audio controls src={song.audio}></audio>

  //<a href={song.link} target="_blank" rel="noopener noreferrer">
             //   Listen on Platform
             // </a>
  
  // Add more songs here
];

function Songs() {
  return (
    <section className="page-section">
      <h2>Our Songs</h2>
      <div className="song-list">
        {songs.map((song, idx) => (
          <div className="song-card" key={idx}>
            <h3>{song.title}</h3>
            <p>{song.description}</p>
            <p><b>Credits:</b> {song.credits}</p>
            <p><b>Release Date:</b> {song.date}</p>
           
            <div style={{ marginTop: '10px' }}>
             

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Songs;