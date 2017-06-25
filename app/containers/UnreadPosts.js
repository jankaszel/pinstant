import {gql, graphql} from 'react-apollo';
import PostList from '../components/PostList';

const UnreadPosts = gql`
  query UnreadPosts($apiToken: String!) {
    getUnreadPosts(apiToken: $apiToken) {
      href
      description
    }
  }
`;

export default graphql(UnreadPosts, {
  options: {variables: {apiToken: process.env.API_TOKEN}},
  props: ({data: {loading, getUnreadPosts}}) => ({
    loading,
    posts: getUnreadPosts,
  }),
})(PostList);
