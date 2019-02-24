import * as React from 'react';
import { Layout, Row, Col } from 'antd';
import SiteMenu from 'containers/Menu';
import StyledImage from 'components/styled/Image';
import { styled } from 'styles';

const logo = require('assets/images/react.svg');


const { Header, Footer, Content } = Layout;

type LayoutProps = {
  children: any,
}

const StyledHeader = styled(Header)`
  background: transparent;
  height: auto;
`;

class HeaderForUser extends React.Component {
  render() {
    return (
      <StyledHeader>
        <SiteMenu />
      </StyledHeader>
    );
  }
}

class HeaderForVisitor extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Row type="flex" justify="center" align="middle">
          <Col>
            <StyledImage src={logo} style={{ height: 150 }} />
          </Col>
        </Row>
      </StyledHeader>
    );
  }
}

class FooterForUser extends React.Component {
  render() {
    return (
      <Footer>
        Welcome user!
      </Footer>
    );
  }
}

class FooterForVisitor extends React.Component {
  render() {
    return (
      <Footer>
        Welcome Visitor!
      </Footer>
    );
  }
}

class LayoutForUser extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout>
        <HeaderForUser />
        <Content>
          {...children}
        </Content>
        <FooterForUser />
      </Layout>
    );
  }
}

class LayoutForVisitor extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout>
        <HeaderForVisitor />
        <Content>
          {...children}
        </Content>
        <FooterForVisitor />
      </Layout>
    );
  }
}

export {
  HeaderForUser,
  HeaderForVisitor,
  FooterForUser,
  FooterForVisitor,
  LayoutForUser,
  LayoutForVisitor,
};
