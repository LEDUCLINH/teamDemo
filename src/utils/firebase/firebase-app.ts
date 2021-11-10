import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/auth'
import 'firebase/app-check'

const clientCredentials = {
  apiKey: 'AIzaSyCbvDy_vC04WPqG0dbbkr0LAPPKzz0iLTg',
  authDomain: 'stkare-317710.firebaseapp.com',
  projectId: 'stkare-317710',
  storageBucket: 'stkare-317710.appspot.com',
  messagingSenderId: '757385894936',
  appId: '1:757385894936:web:1b05162132c2b855f4776d',
  measurementId: 'G-7D1KSQ6FLS',
}

export function initFirebaseApp() {
  if (firebase.apps.length) {
    return
  }

  firebase.initializeApp(clientCredentials)

  if (typeof window !== 'undefined') {
    if ('measurementId' in clientCredentials) {
      firebase.performance()
      firebase.analytics()
    }
  }
}

export function getAuth() {
  return firebase.auth()
}
