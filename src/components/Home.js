import React from 'react';

function Home() {
  return (
    <section className="page-section">
      <h1>Welcome to symphoniQ 
        ~By QUAD</h1>
      <p>
        <b>symphoniQ</b> (by QUAD) is your destination for unique music, creative collaborations, and unforgettable performances.
        <br /><br />
        Explore our songs, book us for your next event, or get in touch!
      </p>
      <div style={{ margin: '32px 0' }}>
        <img
         src="/images/cover.jpeg" alt="Cover"
          style={{ width: '100%', maxWidth: 600, borderRadius: 18, boxShadow: '0 2px 16px #0005' }}
        />
      </div>
      <section className="events">
  <h2>Upcoming Songs</h2>
  <ul>
    <li>Raat Bhar Tu - RELEASING SOON........ </li>
    <li>Jagi Jagi Si - Queued........ </li>
    <li>Kyuuuu - Queued........ </li>
  </ul>
</section>
      <p>
        <a href="/book-show">
          <button style={{ fontSize: '1.1rem', background: '#00ffa9', color: '#181818', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 600 }}>
            Book Us for Your Event
          </button>
        </a>
      </p>
    </section>
  );
}

export default Home;