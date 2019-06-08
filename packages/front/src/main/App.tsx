import React from 'react';
import { HomeModule } from './modules/home/module';
import { ServiceContextDefaultProvider } from './services';
import { FugaModule } from './modules/fuga/module';
import { LoginModule } from './modules/login/module';
import { AuthModule, useAuthState } from './modules/auth/module';
import { LogoutModule } from './modules/logout/module';

const Consumers = () => {
  const { user } = useAuthState();
  return (
    <>
      {user == null ? (
        <LoginModule />
      ) : (
        <>
          <LogoutModule />
          <HomeModule />
          <FugaModule />
        </>
      )}
    </>
  );
};
export const App: React.FC = () => {
  return (
    <ServiceContextDefaultProvider>
      <AuthModule>
        <Consumers />
      </AuthModule>
    </ServiceContextDefaultProvider>
  );
};
