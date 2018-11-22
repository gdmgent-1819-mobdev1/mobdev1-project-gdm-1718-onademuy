const firebaseInstance = require('firebase');

// Initialize Firebase
// TODO: Replace with your project's config
const config = {
  apiKey: 'AIzaSyDerVPpCIo6EovKT5qxEI5bkaWSb7BN7rY',
  authDomain: 'eindopdrachtwebdev.firebaseapp.com',
  databaseURL: 'https://eindopdrachtwebdev.firebaseio.com',
  projectId: 'eindopdrachtwebdev',
  storageBucket: 'eindopdrachtwebdev.appspot.com',
  messagingSenderId: '190328315642',
};

let instance = null;

const initFirebase = () => {
  instance = firebaseInstance.initializeApp(config);
};

const getInstance = () => {
  if (!instance) {
    initFirebase();
  }
  return instance;
};
export {
  initFirebase,
  getInstance,
};
