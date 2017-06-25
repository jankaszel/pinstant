import React from 'react';
import {gql, graphql} from 'react-apollo';

function PostList({loading, posts}) {
  if (loading) {
    return <p>Loading...</p>;
  } else if (posts) {
    return (
      <ul>
        {posts.map(({hash, href, description}) =>
          <li key={hash}>
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

const UnreadPosts = gql`
  query UnreadPosts($apiToken: String!) {
    getUnreadPosts(apiToken: $apiToken) {
      hash
      href
      description
    }
  }
`;

export default graphql(UnreadPosts, {
  options: {
    variables: {
      apiToken: process.env.API_TOKEN,
    },
  },
  props: ({data: {loading, getUnreadPosts}}) => ({
    loading,
    posts: getUnreadPosts,
  }),
})(PostList);
