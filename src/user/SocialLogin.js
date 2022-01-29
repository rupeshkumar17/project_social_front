import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class SocialLogin extends Component {
  responseGoogle = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div className='container'>
        <GoogleLogin
          clientId='186946349278-2d0a4e8km03lvhm6vtghrhgcjdgh9f2i.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default SocialLogin;
