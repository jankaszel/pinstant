import React from 'react';
import styled from 'styled-components';
import UnreadPosts from '../containers/UnreadPosts';

const HelloMessage = styled.p`
  font-family: sans-serif;
  color: red;
`;

export default function App() {
  return (
    <div>
      <HelloMessage>Hi, Pinboarder!</HelloMessage>
      <UnreadPosts />
    </div>
  );
}
