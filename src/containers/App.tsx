import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from 'pages/Home';
import ProfilePage from 'pages/Profile';
import LoginPage from 'pages/Login';
import { LayoutForUser, LayoutForVisitor } from 'containers/Layout';
import SiteRoute from 'containers/Route';


type AppProps = {
  state?: any,
  mapStateToProps?: any,
}

type StateType = {
  user: any,
}

class App extends React.Component<AppProps> {
  static mapStateToProps = (state: StateType) => ({
    state: {
      user: state.user,
    },
  });

  render() {
    return (
      <Switch>
        <SiteRoute path="/login" layout={LayoutForVisitor} component={LoginPage} />
        <SiteRoute exact privateRoute path="/" layout={LayoutForUser} component={HomePage} />
        <SiteRoute privateRoute path="/profile" layout={LayoutForUser} component={ProfilePage} />
      </Switch>
    );
  }
}

export default hot(withRouter(connect(App.mapStateToProps, null)(App) as any));
