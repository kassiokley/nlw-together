import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC80HkPzypQW_cQndoG3IxMN0eNHbvzrTg",
  authDomain: "letmeask-59924.firebaseapp.com",
  databaseURL: "https://letmeask-59924-default-rtdb.firebaseio.com",
  projectId: "letmeask-59924",
  storageBucket: "letmeask-59924.appspot.com",
  messagingSenderId: "1058521921264",
  appId: "1:1058521921264:web:4ca8ede8b09531caf33435"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database();