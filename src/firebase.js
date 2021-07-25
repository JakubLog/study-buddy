import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyB1AJ9Q-yyUljcrF57Hr5lCj1aZgEaRQX8',
  authDomain: 'study-buddy-954e5.firebaseapp.com',
  projectId: 'study-buddy-954e5',
  storageBucket: 'study-buddy-954e5.appspot.com',
  messagingSenderId: '256111894969',
  appId: '1:256111894969:web:a24171d9b12d6828405668',
});

export const auth = app.auth();
export default app;
