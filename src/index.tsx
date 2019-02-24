import * as React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from 'store';
import App from 'containers/App';
import { Global } from 'styles';


const store = configureStore();

const appRoot = document.getElementById('app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Global
          styles={{
            'body, html, #app': {
              height: '100%',
            },
          }}
        />
        <App />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  appRoot,
);
