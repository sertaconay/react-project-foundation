import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


type SiteRouteProps = {
  component?: any,
  layout?: any,
  render?: any,
  path?: string,
  state?: any,
  exact?: boolean,
  privateRoute?: boolean,
}

type StateType = {
  user: any,
}

class SiteRoute extends React.Component<SiteRouteProps> {
  static mapStateToProps = (state: StateType) => ({
    state: {
      user: state.user,
    },
  });

  render() {
    const { component: Component, layout: Layout, privateRoute, state, path, ...rest } = this.props;

    const { user } = state;

    return (
      <Route
        {...rest}
        render={(props: any) => {
          if (
            (user.data && privateRoute)
            || (!user.data && path === '/login')
          ) {
            return (
              <Layout>
                <Component {...props} />
              </Layout>
            );
          }

          if (user.data && path === '/login') {
            return <Redirect to={{ pathname: '/' }} />;
          }

          return <Redirect to={{ pathname: '/login' }} />;
        }}
      />
    );
  }
}

export default connect(SiteRoute.mapStateToProps)(SiteRoute);
