import * as firebase from 'firebase/app';
import { auth, User as FirebaseUser } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import React from 'react';
import { BoughtRepository } from './BoughtRepository';
import { ResourceRepository } from './ResourceRepository';

const config = {
  apiKey: 'AIzaSyAiJu6x2qleFj5uQU9iNP0mtR_Xz7BkcGs',
  authDomain: 'arukiga.firebaseapp.com',
  databaseURL: 'https://miscs-randd.firebaseio.com',
  projectId: 'miscs-randd',
};

firebase.initializeApp(config);

export class AuthService {
  constructor(private firebaseAuth: auth.Auth) {}

  async login(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    return this.firebaseAuth.signInWithRedirect(provider);
  }

  logout(): Promise<void> {
    return this.firebaseAuth.signOut();
  }

  getCurrentUser(): FirebaseUser | null {
    return this.firebaseAuth.currentUser;
  }
  subscribe(callback: (v: FirebaseUser | null) => void) {
    return this.firebaseAuth.onAuthStateChanged(callback);
  }
}
const authService = new AuthService(firebase.auth());
const resourceRepository = new ResourceRepository(firebase.firestore());
const boughtRepository = new BoughtRepository(firebase.firestore());
const value = {
  firebase,
  authService,
  resourceRepository,
  boughtRepository,
};

const ServiceContext = React.createContext(value);
export const ServiceContextDefaultProvider = (props: { children: any }) => (
  <ServiceContext.Provider value={value}>{props.children}</ServiceContext.Provider>
);
export const useServices = () => {
  return React.useContext(ServiceContext);
};
