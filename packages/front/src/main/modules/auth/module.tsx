import React from 'react';
import { createModule } from 'main/common/createModule';
import { User as FirebaseUser } from 'firebase/app';
import { AuthComponent } from './components/AuthView';

interface AuthState {
  user: FirebaseUser | null;
}

const { Context: AuthContext, Actions, createUseState, useActions } = createModule('auth', {
  updateUser: (user: FirebaseUser | null) => ({ user }),
});
export const useAuthState = createUseState<AuthState>();
export const useAuthActions = useActions;

const authReducer = (state: AuthState, action: any): AuthState => {
  if (Actions.updateUser.match(action)) {
    return { user: action.payload.user };
  } else {
    return state;
  }
};

export const AuthModule = (props: { children: any }) => {
  const [state, dispatch] = React.useReducer(authReducer, { user: null });
  const value = { state, dispatch };

  return (
    <AuthContext.Provider value={value}>
      <AuthComponent>{props.children}</AuthComponent>
    </AuthContext.Provider>
  );
};
