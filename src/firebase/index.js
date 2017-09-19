/**
 * @Author: andreeray
 * @Date:   2017-09-19T16:16:50+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T16:18:51+02:00
 */



import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDHXPH6kH9wevpz3WRVDcmyuxPLdwCiLow",
    authDomain: "fir-d45c5.firebaseapp.com",
    databaseURL: "https://fir-d45c5.firebaseio.com",
    projectId: "fir-d45c5",
    storageBucket: "fir-d45c5.appspot.com",
    messagingSenderId: "1022982205754"
}

Firebase.initializeApp(config)

export default Firebase
