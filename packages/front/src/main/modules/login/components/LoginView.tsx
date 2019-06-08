import { useServices } from 'main/services';
import React from 'react';
import SigninButton from './btn_google_signin.png';

export const LoginView = () => {
  const { authService } = useServices();

  return (
    <div>
      <input type="image" src={SigninButton} alt="signin with google" onClick={() => authService.login()} />
    </div>
  );
};
