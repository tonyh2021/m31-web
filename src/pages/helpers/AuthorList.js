import React, { useState } from 'react';

export default function AuthorList({ authors }) {
  const [showAll, setShowAll] = useState(false);

  const formatAuthors = () => {
    if (showAll || authors.length <= 10) {
      return authors.map((author, index) => {
        const isLast = index === authors.length - 1;
        const isSecondLast = index === authors.length - 2;

        return (
          <span key={index}>
            {author}
            {isLast ? '' : isSecondLast ? ' & ' : ', '}
          </span>
        );
      });
    } else {
      const firstAuthors = authors.slice(0, 9);
      const lastAuthor = authors[authors.length - 1];

      return (
        <>
          {firstAuthors.map((author, index) => (
            <span key={index}>
              {author}
              {index < firstAuthors.length - 1 ? ', ' : ''}
            </span>
          ))}
          {', ... & '}
          {lastAuthor}
        </>
      );
    }
  };


  return (
    <div >
      <div style={{ margin: '0'}}>
        <span style={{ fontWeight: 600, textTransform: 'uppercase', color: '#1c3d5a', fontSize: '0.85rem', color: "black"}}>aUTHORS: </span>
        {formatAuthors()}
      </div>
      {authors.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            marginTop: '0px',
            marginBottom: '0px',
            backgroundColor: '#f1f3f4',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
            transition: 'width 0.2s ease',
            width: 'auto'
          }}
        >
          {showAll ? '− Show fewer authors' : '+ Show all authors'}
        </button>
      )}
    </div>
  );
}