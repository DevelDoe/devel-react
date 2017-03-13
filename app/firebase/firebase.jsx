/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-12T19:18:08+01:00
* @Email:  me@andreeray.se
* @Filename: firebase.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:52:58+01:00
*/

import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQKt4ZnF72d8N4u53zgiC8OKNvUAvuoLQ",
    authDomain: "tests-492e3.firebaseapp.com",
    databaseURL: "https://tests-492e3.firebaseio.com",
    storageBucket: "tests-492e3.appspot.com",
    messagingSenderId: "709004678056"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    appName: 'Firebase' 
})
