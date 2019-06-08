import { useServices } from 'main/services';
import React from 'react';
import SigninButton from './btn_google_signin.png';

export const LoginView = () => {
  const { authService } = useServices();

  return (
    <div className="login">
      <div className="login-area">
        <img className="login-area-logo" src="https://user-images.githubusercontent.com/8326452/59144451-1900b800-8a13-11e9-9802-c19ed4ebd8e1.png" />
        <input type="image" src={SigninButton} alt="signin with google" onClick={() => authService.login()} />
      </div>
    </div>
  );
};
