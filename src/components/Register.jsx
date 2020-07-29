import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

import CustomNav from './CustomNav';
import Footer from './Footer';
import Modal from './subcomponents/Modal';

import { countryCallingCodes } from '../constants';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      formUsername: '',
      formPassword: '',
      formEmail: '',
      formCallingCode: '+1',
      formPhoneNumber: '',
    };
    this.goToLogin = this.goToLogin.bind(this);
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async register() {
    this.setState({
      displayModal: true,
    });
    const {
      formUsername: username,
      formPassword: password,
      formEmail: email,
      formCallingCode,
      formPhoneNumber,
    } = this.state;
    // eslint-disable-next-line
    console.log(
      `${username}\n${
        password}\n${
        email}\n${
        formCallingCode}${formPhoneNumber}`,
    );
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: (formCallingCode + formPhoneNumber),
        },
      });
      // eslint-disable-next-line
      console.log({ user });
      // eslint-disable-next-line
      console.log(user);
      this.setState({
        displayModal: false,
      });
    } catch (error) {
      // eslint-disable-next-line
      console.log('error signing up:', error);
      this.setState({
        displayModal: false,
      });
    }
  }

  goToLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const {
      displayModal, formUsername, formPassword, formEmail, formCallingCode, formPhoneNumber,
    } = this.state;
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div className="container my-5" style={{ borderRadius: '25px', border: '4px solid #61dafb' }}>
            <Form>
              <>
                <Form.Text className="h4 mb-4">Create a new account</Form.Text>

                <Form.Group controlId="formUsername">
                  <Form.Control type="string" placeholder="Username" value={formUsername} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" value={formPassword} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" value={formEmail} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        className="c-pointer"
                        onChange={this.handleChange}
                        id="formCallingCode"
                        value={formCallingCode}
                      >
                        {
                          countryCallingCodes.map((code) => (
                            <option key={code} value={code}>{code}</option>
                          ))
                        }
                      </Form.Control>
                    </InputGroup.Prepend>
                    <Form.Control
                      id="formPhoneNumber"
                      type="phone"
                      placeholder="(555)555-1212"
                      value={formPhoneNumber}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Button
                    variant="primary"
                    onClick={this.register}
                    onKeyDown={this.register}
                    disabled={
                      formUsername.length === 0
                      || formPassword.length === 0
                      || formEmail.length === 0
                      || formPhoneNumber.length === 0
                    }
                  >
                    Submit
                  </Button>
                  <Form.Text className="h6 mt-4">
                    {'Already have an account? '}
                    <span
                      className="text-secondary c-pointer"
                      onClick={this.goToLogin}
                      onKeyDown={this.goToLogin}
                      role="button"
                      tabIndex={0}
                    >
                      Log in
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

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Register.defaultProps = {
  history: {
    push: () => { },
  },
};

export default withRouter(Register);
