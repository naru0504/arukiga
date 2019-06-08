import React from 'react';
import { HomeModule } from './modules/home/module';
import { ServiceContextDefaultProvider } from './services';
import { FugaModule } from './modules/fuga/module';
import { LoginModule } from './modules/login/module';
import { AuthModule } from './modules/auth/module';

export const App: React.FC = () => {
  return (
    <ServiceContextDefaultProvider>
      <AuthModule>
        <LoginModule />
        <HomeModule />
        <FugaModule />
      </AuthModule>
    </ServiceContextDefaultProvider>
  );
};
