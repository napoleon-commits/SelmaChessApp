import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CustomNav from './CustomNav';
import Footer from './Footer';
import Modal from './subcomponents/Modal';

import {countryCallingCodes} from '../constants';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    };
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    const { displayModal } = this.state;
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div className="container my-5" style={{ borderRadius: '25px', border: '4px solid #61dafb' }}>
            <Form>
              <>
                <Form.Text className="h4 mb-4">Create a new account</Form.Text>

                <Form.Group controlId="formUsername">
                  <Form.Control type="string" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <Form.Control as="select" className="c-pointer">
                        {
                          countryCallingCodes.map(code => (
                            <option key={code} value={code}>{code}</option>
                          ))
                        }
                      </Form.Control>
                    </InputGroup.Prepend>
                    <Form.Control type="phone" placeholder="(555)555-1212" />
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Button variant="primary" type="submit">
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
