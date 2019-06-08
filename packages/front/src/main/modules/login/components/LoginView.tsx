import { Button } from 'main/components/Button';
import { useServices } from 'main/services';
import React from 'react';
import SigninButton from './btn_google_signin.png';

export const LoginView = () => {
  const { authService } = useServices();
  React.useEffect(() => {
    authService.subscribe(user => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      <input type="image" src={SigninButton} alt="signin with google" onClick={() => authService.login()} />
      <Button onClick={() => authService.logout()}>logout</Button>
    </div>
  );
};
