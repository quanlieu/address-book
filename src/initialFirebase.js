const config = {
  apiKey: 'AIzaSyDAslG8GCT2WQV99lrfi0yM_J4dD1Ojl30',
  authDomain: 'kyne-project.firebaseapp.com',
  databaseURL: 'https://kyne-project.firebaseio.com',
  projectId: 'kyne-project',
  storageBucket: '',
  messagingSenderId: '938781006943'
};

export default () => firebase.initializeApp(config);
