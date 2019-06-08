import React from 'react';
import { useServices } from 'main/services';
import { useAuthActions } from '../module';

export const AuthView = (props: { children: any }) => {
  const { authService } = useServices();
  const { updateUser } = useAuthActions();
  React.useEffect(() => {
    authService.subscribe(user => {
      updateUser(user);
    });
  }, []);

  return props.children;
};
