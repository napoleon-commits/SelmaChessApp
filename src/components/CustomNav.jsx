import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/CustomNav.css'

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authObject: {},
    };
    this.logout = this.logout.bind(this);
    this.enrollTags = this.enrollTags.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  componentDidMount() {
    Auth.currentUserInfo().then((authObject) => {
      this.setState({
        authObject,
      });
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(`error currentUserInfo${error}`);
      this.setState({
        authObject: {},
      });
    });
  }

  async logout() {
    try {
      await Auth.signOut();
      this.setState({
        authObject: {},
      });
    } catch (error) {
      // eslint-disable-next-line
      console.log('error signing out: ', error);
    }
  }

  enrollTags() {
    const { authObject } = this.state;
    if (window.location.pathname === '/login') {
      return null;
    } if (authObject && authObject.username) {
      return (
        <>
          <>{`${authObject.username}`}</>
          <div
            id="logout"
            onClick={this.logout}
            onKeyDown={this.logout}
          >
            Log out
          </div>
        </>
      );
    }
    return (
        <span onClick={this.goToLogin} id="login">
          {'Log in'}
        </span>
    );
  }

  goToLogin(){
    const {history} = this.props;
    history.push('/login');
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <div>
          <Navbar.Toggle id="navbar-toggle" aria-controls="basic-navbar-nav" className="mr-3" />
          <Navbar.Brand href="/">Selma Chess App</Navbar.Brand>
        </div>
        <div>
          {
            this.enrollTags()
          }
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={window.location.pathname} className="mr-auto">
            <Nav.Link href="/learn">How to Play</Nav.Link>
            <NavDropdown title="Play" id="basic-nav-dropdown">
              <NavDropdown.Item href="/offline">Free Mode</NavDropdown.Item>
              <NavDropdown.Item href="/online">Against a Friend Online</NavDropdown.Item>
              <NavDropdown.Item href="/engine">Against Engine</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

CustomNav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

CustomNav.defaultProps = {
  history: {
    push: () => { },
  },
};

export default withRouter(CustomNav);

