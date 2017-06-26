import React from 'react';
import {connect} from 'react-redux';
import {compose} from '../ramda';
import withSettings from './withSettings';
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

const withData = graphql(UnreadPosts, {
  options: ({settings}) => ({
    variables: {
      apiToken: settings.apiToken,
    },
  }),
  props: ({data: {loading, getUnreadPosts}}) => ({
    loading,
    posts: getUnreadPosts,
  }),
});

export default compose(
  connect(state => state),
  withData,
  withSettings(true, '/setup')
)(PostList);
