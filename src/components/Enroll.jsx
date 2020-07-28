import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomNav from './CustomNav';
import Footer from './Footer';


class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'login',
      formUsername: '',
      formPassword: '',
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

  login() {
    const { formUsername, formPassword } = this.state;
    // eslint-disable-next-line
    console.log(`${formUsername} ${formPassword}`);
  }

  render() {
    const { status } = this.state;
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
                        />
                      </Form.Group>

                      <Form.Group controlId="formPassword">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Button
                          variant="primary"
                          onClick={this.login}
                          onKeyDown={this.login}
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
      </>
    );
  }
}

export default Enroll;
