import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHcG-d6gBn0zrr9Pmzu4yXRZSkg5XKXUE',
  authDomain: 'mini-blog-eedf5.firebaseapp.com',
  projectId: 'mini-blog-eedf5',
  storageBucket: 'mini-blog-eedf5.appspot.com',
  messagingSenderId: '498355949591',
  appId: '1:498355949591:web:cf8acd32dbc010430acc52',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
