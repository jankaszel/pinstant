import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import apolloClient from './apolloClient';
import setupServiceWorker from './setupServiceWorker';
import App from './components/App';

function render(Component) {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Component />
    </ApolloProvider>,
    document.getElementById('app')
  );
}

setupServiceWorker();
render(App);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
