import React, { useState } from 'react';
import AuthorList from './AuthorList.js';

export default function Article({ article }) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem'}}>
      <div style={{ fontWeight: 600, textTransform: 'uppercase', color: '#1c3d5a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: 0 }}>
        <span>{article.journal} / {article.date}</span>
        {/* {article.date && <span style={{ fontWeight: 700 }}></span>} */}
      </div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0', color: '#1c3d5a', lineHeight: 1.1 }}>
        <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1c3d5a', textDecoration: 'none', fontWeight: 800 }}>
          {article.title}
        </a>
      </h2>
      <div style={{ margin: 0, fontSize: '0.85rem', padding : 0 }}>
        <AuthorList authors={article.authors} />
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #bbb', margin: '18px 0 0 0' }} />
    </div>
  );
}