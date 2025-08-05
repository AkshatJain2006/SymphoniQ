import React from 'react';

const team = [
  {
    name: "FOUNDER - Akshat Jain",
    role: "Composer, Lyricist, Vocalist",
    img: "/images/akshat.jpg", // Replace with real photos if you have
    
  },
  {
    name: "CO-FOUNDER - Havan Nayak",
    role: "Composer, Producer, Vocalist",
    img: "/images/havan.jpg",
    
  },
  {
    name: "Adarsh",
    role: "Pianist",
    img: "/images/adarsh.jpg",
    
  },
  {
    name: "Varun",
    role: "Guitarist",
    img: "/images/hathi.jpg",
    
  },
];

function About() {
  return (
    <section className="page-section">
      <h2>About <span style={{color: '#00ffa9'}}>symphoniQ</span></h2>
      <p className="about-tagline">"Blending genres, creating sonic experiences."</p>
      <p>
        <b>symphoniQ</b> is a music production collective founded by <b>Akshat Jain</b> and<b> Havan Nayak</b> in 2025, blending genres and creating sonic experiences for every mood. With a shared passion for music and creativity, SymphoniQ is dedicated to producing original compositions, live performances, and unforgettable collaborations.
        
      </p>
      <div className="about-team">
        {team.map((member, idx) => (
          <div className="team-member" key={idx}>
            <img src={member.img} alt={member.name} />
            <h4>{member.name}</h4>
            <p className="role">{member.icon} {member.role}</p>
          </div>
        ))}
      </div>
      <p className="about-story">
        Our journey began with a passion for music and a vision to bring fresh sounds to every stage and playlist.
        It all began in a hostel room, where two music enthusiasts — Akshat and Havan — shared a dream: to create their own music.

One day, Akshat showed his written lyrics to Havan, and the spark was instant. The words, the melodies, the vibe — everything clicked. They started working on ideas, originally naming their vision “Symphonies by A&H.”

Within a year, their passion outgrew the hostel walls. They moved into a flat, joined by two more talented artists — Varun (Guitarist) and Adarsh (Pianist). Together, the four of them brought this vision to life and gave it a new identity:
SymphoniQ (by QUAD) — symbolizing the harmony of four creative minds.

Now, as we gear up for our first release – “Raat Bhar Tuu”, we’re excited to see what destiny has planned for us and our team. This is just the beginning.
      </p>
    </section>
  );
}

export default About;