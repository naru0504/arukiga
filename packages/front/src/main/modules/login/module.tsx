import React from 'react';
import { createModule } from 'main/common/createModule';
import { LoginView } from './components/LoginView';

interface LoginState {}
const { Context: LoginContext, Actions, createUseState, useActions } = createModule('login', {});
export const useLoginState = createUseState<LoginState>();
export const useLoginActions = useActions;

const loginReducer = (state: LoginState, action: any): LoginState => {
  return state;
};

export const LoginModule = () => {
  const [state, dispatch] = React.useReducer(loginReducer, { foo: 'bar' });
  const value = { state, dispatch };

  return (
    <LoginContext.Provider value={value}>
      <LoginView />
    </LoginContext.Provider>
  );
};
