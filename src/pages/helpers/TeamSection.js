import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaGoogleScholar } from 'react-icons/fa6';

export default function TeamSection({ members }) {
  return (
    <div className="team-container">
      {members.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.imgSrc} alt={member.name} className="team-photo" />
          <h2>{member.name}</h2>
          <p className="role">{member.role}</p>
          <ul className="description">
            {member.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="social-icons">
            <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href={member.googlescholar} target="_blank" rel="noopener noreferrer"><FaGoogleScholar /></a>
          </div>
        </div>
      ))}
    </div>
  );
}