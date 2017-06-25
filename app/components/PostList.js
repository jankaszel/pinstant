import React from 'react';

export default function PostList({loading, posts}) {
  if (loading) {
    return <p>Loading...</p>;
  } else if (posts) {
    return (
      <ul>
        {posts.map(({href, description}, index) =>
          <li key={index}>
            <a href={href}>
              <em>{description}</em>
              <pre>{href}</pre>
            </a>
          </li>
        )}
      </ul>
    );
  } else {
    return <p>Nah.</p>;
  }
}
