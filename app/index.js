import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router} from 'react-router-dom';
import apolloClient from './apolloClient';
import setupStore from './setupStore';
import setupServiceWorker from './setupServiceWorker';
import App from './components/App';

function render(Component) {
  const store = setupStore();

  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Component />
        </Router>
      </ApolloProvider>
    </Provider>,
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
