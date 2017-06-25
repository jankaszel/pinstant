import React from 'react';
import {Redirect} from 'react-router-dom';

export default function withSettings(hasSettings, redirectTo) {
  return Component => {
    return props => {
      let settingsSet = props.settings && props.settings.apiToken;

      if (!hasSettings) {
        settingsSet = !settingsSet;
      }

      if (settingsSet) {
        return <Component {...props} />;
      } else {
        return <Redirect to={redirectTo} />;
      }
    };
  };
}
