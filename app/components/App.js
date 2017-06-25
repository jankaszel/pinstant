import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import PostList from './PostList';
import Setup from './Setup';
import Settings from './Settings';

const HelloMessage = styled.p`
  font-family: sans-serif;
  color: red;
`;

export default function App() {
  return (
    <div>
      <HelloMessage>Hi, Pinboarder!</HelloMessage>

      <Route exact path="/" component={PostList} />
      <Route exact path="/setup" component={Setup} />
      <Route exact path="/settings" component={Settings} />
    </div>
  );
}
