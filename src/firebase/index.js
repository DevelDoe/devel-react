/**
 * @Author: andreeray
 * @Date:   2017-09-19T16:16:50+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-28T11:20:20+02:00
 * @Desc:
 *      Firebase konfiguration file with environment variables.
 *      Using environment variables has two benifits:
 *          * Utility - using different variables for production,
 *                      testing and develeopment lets us use different databases.
 *          * Security - Storing database information in the repo is a bad idea
 *                       and by gitignoreing the ./environments folder we don't
 *                       save any configuration data.
 */



import Firebase from 'firebase'

try {

    var config = {
        apiKey: "AIzaSyDHXPH6kH9wevpz3WRVDcmyuxPLdwCiLow",
        authDomain: "fir-d45c5.firebaseapp.com",
        databaseURL: "https://fir-d45c5.firebaseio.com",
        projectId: "fir-d45c5",
        storageBucket: "fir-d45c5.appspot.com",
        messagingSenderId: "1022982205754"
    }

    Firebase.initializeApp(config)

} catch (error) {
    console.log("Firebase authentication error",error)
}

export var firebaseRef = Firebase.database().ref()
export var firebaseItemRef = firebaseRef.child('/items')
export default Firebase
