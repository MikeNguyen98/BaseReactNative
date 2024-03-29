import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Router from './router';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
