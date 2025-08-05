import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} symphoniQ (by QUAD) &middot; All rights reserved.<br />
        <span>
          Follow us:
          {' '}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {' | '}
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
          {' | '}
          <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;