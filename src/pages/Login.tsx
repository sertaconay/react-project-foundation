import * as React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logUserIn } from 'routines';
import StyledLayout from 'components/styled/Layout';


interface LoginPageProps {
  form: any,
}

class LoginPage extends React.Component<LoginPageProps> {
  static mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({
      logUserIn,
    }, dispatch),
  });

  handleSubmit = (event: any) => {
    event.preventDefault();
    const { form } = this.props;
    const { validateFields } = form;
    validateFields((error: any, values: any) => {
      if (!error) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <StyledLayout>
        <Row type="flex" align="middle" justify="center">
          <Col>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>,
                )}
                <Button className="login-form-forgot" htmlType="button">Forgot password</Button>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <Button htmlType="button">register now!</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </StyledLayout>
    );
  }
}

export default connect(null, LoginPage.mapDispatchToProps)(Form.create()(LoginPage));
