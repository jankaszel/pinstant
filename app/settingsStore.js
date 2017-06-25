const initialState = {
  apiToken: null,
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SETTINGS':
      return {
        ...state,
        ...action.settings,
      };

    default:
      return state;
  }
}

export function setSettings(settings) {
  return {
    type: 'SET_SETTINGS',
    settings,
  };
}
