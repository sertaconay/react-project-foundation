import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';


const { Header, Footer, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default hot(App);
