import { useHomeActions } from 'main/modules/home/module';
import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import { auth, User as FirebaseUser } from 'firebase/app';
import { ResourceRepository } from './ResourceRepository';
import { BoughtRepository } from './BoughtRepository';

const basePath = (() => {
  switch (process.env.REACT_APP_STAGE) {
    case 'production':
      return '';
    default:
      return 'http://localhost:4444/api/v1';
  }
})();

class HttpClient {
  get<T>(path: string): Promise<T> {
    return fetch(`${basePath}${path}`).then(res => res.json());
  }
}
const httpClient = new HttpClient();
class HomeRepository {
  constructor(private client: HttpClient) {}
  get() {
    return this.client.get<{ home: string }>('/home');
  }
  getMock(): Promise<{ home: string }> {
    return new Promise(done => {
      setTimeout(() => done({ home: 'hoge' }), 200);
    });
  }
}
const homeRepository = new HomeRepository(httpClient);

class HomeDomain {
  useUpdateHome() {
    const { updateHome } = useHomeActions();
    const { homeRepository, hogeRepository } = useServices();

    return async () => {
      const res = await hogeRepository.list();
      console.log(res);
      const { home } = await homeRepository.getMock();
      updateHome(home);
    };
  }
}
const homeDomain = new HomeDomain();

const config = {
  apiKey: 'AIzaSyAiJu6x2qleFj5uQU9iNP0mtR_Xz7BkcGs',
  authDomain: 'arukiga.firebaseapp.com',
  databaseURL: 'https://miscs-randd.firebaseio.com',
  projectId: 'miscs-randd',
};

firebase.initializeApp(config);

class HogeRepository {
  constructor(private db: firebase.firestore.Firestore) {}

  list() {
    return this.db.collection('books').get();
  }
}
const hogeRepository = new HogeRepository(firebase.firestore());

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
  homeRepository,
  homeDomain,
  firebase,
  hogeRepository,
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
