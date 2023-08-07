import React from 'react';

function displayCups(minutes) {
  if (minutes < 30) {
    const rounded = Math.ceil(minutes / 5); // Use Math.ceil to round up to the nearest 5
    const cups = '☕️'.repeat(rounded);
    return <>{cups}</>; // Use React fragment to render the cups
  } else {
    const rounded = Math.ceil(minutes / 10); // Use Math.ceil to round up to the nearest 10
    const bentoBoxes = '🍱'.repeat(rounded);
    return <>{bentoBoxes}</>; // Use React fragment to render the bento boxes
  }
}

const Article = ({ title, preview, minutes, date = 'January 1, 1970' }) => {
  const displayDate = date || 'January 1, 1970';

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      <p>
        {displayCups(minutes)} {minutes} min read
      </p>
    </article>
  );
};

export default Article;
