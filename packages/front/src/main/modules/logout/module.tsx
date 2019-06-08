import React from 'react';
import { createModule } from 'main/common/createModule';
import { LogoutView } from './components/LogoutView';

interface LogoutState {}
const { Context: LogoutContext, Actions, createUseState, useActions } = createModule('logout', {});
export const useLogoutState = createUseState<LogoutState>();
export const useLogoutActions = useActions;

const logoutReducer = (state: LogoutState, action: any): LogoutState => {
  return state;
};

export const LogoutModule = () => {
  const [state, dispatch] = React.useReducer(logoutReducer, {});
  const value = { state, dispatch };

  return (
    <LogoutContext.Provider value={value}>
      <LogoutView />
    </LogoutContext.Provider>
  );
};
