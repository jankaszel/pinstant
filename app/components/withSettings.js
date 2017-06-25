import React from 'react';
import {Redirect} from 'react-router-dom';

export default function withSettings(Component) {
  return props => {
    if (props.settings && props.settings.apiToken) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/setup" />;
    }
  };
}
