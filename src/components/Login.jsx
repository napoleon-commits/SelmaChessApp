import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';
import Modal from './subcomponents/Modal';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formUsername: '',
      formPassword: '',
      displayModal: false,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  async login() {
    this.setState({
      displayModal: true,
    });
    const { formUsername, formPassword } = this.state;
    try {
      await Auth.signIn(formUsername, formPassword);
      this.setState({
        displayModal: false,
      });
      const { history } = this.props;
      history.push('/online');
    } catch (error) {
      this.setState({
        displayModal: false,
      });
      // eslint-disable-next-line
      console.log('error signing in', error);
    }
  }

  goToRegister() {
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    const {
      formUsername, formPassword, displayModal,
    } = this.state;
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div className="container my-5" style={{ borderRadius: '25px', border: '4px solid #61dafb' }}>
            <Form>
              <>
                <Form.Text className="h4 mb-4">Sign in to your account</Form.Text>

                <Form.Group controlId="formUsername">
                  <Form.Control
                    type="string"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={formUsername}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={formPassword}
                  />
                </Form.Group>

                <Form.Group>
                  <Button
                    variant="primary"
                    onClick={this.login}
                    onKeyDown={this.login}
                    disabled={
                      formUsername.length === 0
                      || formPassword.length === 0
                    }
                  >
                    Submit
                  </Button>
                  <Form.Text className="h6 mt-4">
                    {'Need an account? '}
                    <span
                      onClick={this.goToRegister}
                      onKeyDown={this.goToLogin}
                      className="text-secondary c-pointer"
                      role="button"
                      tabIndex={0}
                    >
                      Register
                    </span>
                  </Form.Text>
                </Form.Group>
              </>
            </Form>
          </div>
          <div className="px-3">
            <Footer />
          </div>
        </div>
        <div style={{ display: (displayModal ? 'block' : 'none') }}><Modal /></div>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Login.defaultProps = {
  history: {
    push: () => { },
  },
};

export default withRouter(Login);
