import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBlwrNHIZ2UJpXdpcLOHy_8XcEDWfCZCnA",
  authDomain: "zforum-e3bc5.firebaseapp.com",
  databaseURL: "https://zforum-e3bc5.firebaseio.com",
  projectId: "zforum-e3bc5",
  storageBucket: "zforum-e3bc5.appspot.com",
  messagingSenderId: "776846395492",
  appId: "1:776846395492:web:40f248ee2700248bf13771",
  measurementId: "G-HK8QB3TVEQ"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;