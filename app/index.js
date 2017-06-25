import React from 'react';
import ReactDOM from 'react-dom';
import setupServiceWorker from './setupServiceWorker';
import App from './components/App';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('app'));
}

setupServiceWorker();
render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
