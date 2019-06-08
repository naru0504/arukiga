import React from 'react';
import { HomeModule } from './modules/home/module';
import { ServiceContextDefaultProvider } from './services';

import { LoginModule } from './modules/login/module';
import { AuthModule, useAuthState } from './modules/auth/module';
import { LogoutModule } from './modules/logout/module';
import { ArukigaListModule } from './modules/arukigaList/module';
import { Navigation } from './components/Navigation';

const Consumers = () => {
  const { user } = useAuthState();
  return (
    <>
      {user == null ? (
        <LoginModule />
      ) : (
        <>
          <ArukigaListModule />
          <HomeModule />
          <LogoutModule />
          <Navigation />
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
