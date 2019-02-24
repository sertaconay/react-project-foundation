import * as React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';


type SiteMenuProps = {
  actions: {
    push: (key: any) => void,
  },
}

class SiteMenu extends React.Component<SiteMenuProps> {
  static mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({
      push,
    }, dispatch),
  });

  render() {
    const { actions } = this.props;

    return (
      <Menu
        mode="horizontal"
        onClick={event => actions.push(event.key)}
      >
        <Menu.Item key="/">
          <Icon type="home" /> Home
        </Menu.Item>
        <Menu.Item key="profile">
          <Icon type="profile" /> Profile
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(null, SiteMenu.mapDispatchToProps)(SiteMenu);
