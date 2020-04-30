// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/storage'
import 'firebase/database'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTsDA51XtCWbMYFUa7_Av4apeLkHQ3YE8',
  authDomain: 'darvoz-8ecff.firebaseapp.com',
  databaseURL: 'https://darvoz-8ecff.firebaseio.com',
  projectId: 'darvoz-8ecff',
  storageBucket: 'darvoz-8ecff.appspot.com',
  messagingSenderId: '114726207591',
  appId: '1:114726207591:web:37369866574f8ca1b794c2',
  measurementId: 'G-N8BQ6SBKPB'
}
if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
// Create a root reference
const storage = firebase.storage().ref()
const database = firebase.database()
// returns promise
export const uploadFile = (file, filename) => storage.child(filename).put(file)
export const saveData = (data, location = 'audio/') => {
  const newData = database.ref(location).push()
  return new Promise((resolve, reject) => {
    newData
      .set(data)
      .then(() => resolve(newData.key))
      .catch(reject)
  })
}
