import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/subcomponents/CustomNav.css';

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authObject: {},
    };
    this.logout = this.logout.bind(this);
    this.enrollTags = this.enrollTags.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.goTo = this.goTo.bind(this);
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
      return (
        <div className="px-4">
          <span
            onClick={() => { this.goTo('/register'); }}
            onKeyDown={() => { this.goTo('/register'); }}
            role="button"
            tabIndex={0}
            className="custom-nav-link"
          >
            Register
          </span>
        </div>
      );
    }
    if (window.location.pathname === '/register') {
      return (
        <div className="px-4">
          <span
            onClick={() => { this.goTo('/login'); }}
            onKeyDown={() => { this.goTo('/login'); }}
            role="button"
            tabIndex={0}
            className="custom-nav-link"
          >
            Log in
          </span>
        </div>
      );
    }
    if (authObject && authObject.username) {
      return (
        <div className="px-4">
          <span
            onClick={this.logout}
            onKeyDown={this.logout}
            role="button"
            tabIndex={0}
          >
            Log out
          </span>
        </div>
      );
    }

    return (
      <div className="px-4">
        <span
          onClick={() => { this.goTo('/login'); }}
          onKeyDown={() => { this.goTo('/login'); }}
          role="button"
          tabIndex={0}
          className="custom-nav-link"
        >
          Log in
        </span>
      </div>
    );
  }

  goToLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  goTo(href) {
    const { history } = this.props;
    history.push(href);
  }

  render() {
    return (
      <Navbar expand="lg">
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3" />
          <span
            className="h5 c-pointer custom-nav-link"
            onClick={() => { this.goTo('/'); }}
            role="button"
            tabIndex={0}
            onKeyDown={() => { this.goTo('/'); }}
          >
            Selma Chess App
          </span>
        </div>
        <div>
          {
            this.enrollTags()
          }
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={window.location.pathname} className="mr-auto">
            <span
              className="c-pointer mr-4 custom-nav-link"
              onClick={() => { this.goTo('/learn'); }}
              onKeyDown={() => { this.goTo('/learn'); }}
              role="button"
              tabIndex={0}
            >
              How to Play
            </span>
            <span
              className="mr-4 c-pointer custom-nav-link"
              onClick={() => { this.goTo('/offline'); }}
              onKeyDown={() => { this.goTo('/offline'); }}
              role="button"
              tabIndex={0}
            >
              Play Offline
            </span>
            <span
              className="mr-4 c-pointer custom-nav-link"
              onClick={() => { this.goTo('/online'); }}
              onKeyDown={() => { this.goTo('/online'); }}
              role="button"
              tabIndex={0}
            >
              Play Online
            </span>
            <span
              className="c-pointer mr-4 custom-nav-link"
              onClick={() => { this.goTo('/contact'); }}
              onKeyDown={() => { this.goTo('/contact'); }}
              role="button"
              tabIndex={0}
            >
              Contact
            </span>
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
