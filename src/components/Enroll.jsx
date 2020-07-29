import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomNav from './CustomNav';
import Footer from './Footer';
import Modal from './subcomponents/Modal';


class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'login',
      formUsername: '',
      formPassword: '',
      displayModal: false,
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeStatus(status) {
    this.setState({
      status,
    });
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

  render() {
    const {
      status, formUsername, formPassword, displayModal,
    } = this.state;
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div className="container my-5" style={{ borderRadius: '25px', border: '4px solid #61dafb' }}>
            <Form>
              {
                status === 'login'
                  ? (
                    <>
                      <Form.Text className="h4 mb-4">Sign in with your username and password</Form.Text>

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
                            className="text-secondary"
                            onClick={() => { this.changeStatus('signup'); }}
                            onKeyDown={() => { this.changeStatus('signup'); }}
                            style={{ cursor: 'pointer' }}
                            role="button"
                            tabIndex={0}
                          >
                            Sign up
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </>
                  )
                  : (
                    <>
                      <Form.Text className="h4 mb-4">Sign up with a new account</Form.Text>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="string" placeholder="Email or Phone number" />
                      </Form.Group>

                      <Form.Group controlId="formBasicName">
                        <Form.Control type="string" placeholder="Enter your name" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <Form.Text className="h6 mt-4">
                          {'Already have an account? '}
                          <span
                            className="text-secondary"
                            onClick={() => { this.changeStatus('login'); }}
                            onKeyDown={() => { this.changeStatus('login'); }}
                            style={{ cursor: 'pointer' }}
                            role="button"
                            tabIndex={0}
                          >
                            Log in
                          </span>
                        </Form.Text>
                      </Form.Group>
                    </>
                  )
              }
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

Enroll.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Enroll.defaultProps = {
  history: {
    push: () => {},
  },
};

export default withRouter(Enroll);
