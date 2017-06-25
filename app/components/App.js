import React from 'react';
import styled from 'styled-components';

const HelloMessage = styled.p`
  font-family: sans-serif;
  color: red;
`;

export default function App() {
  return <HelloMessage>Hi, Pinboard user!</HelloMessage>;
}
