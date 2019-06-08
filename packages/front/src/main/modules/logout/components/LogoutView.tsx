import { Button } from 'main/components/Button';
import { useServices } from 'main/services';
import React from 'react';

export const LogoutView = () => {
  const { authService } = useServices();

  return (
    <div>
      <Button onClick={() => authService.logout()}>logout</Button>
    </div>
  );
};
