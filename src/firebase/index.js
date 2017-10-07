/**
 * @Author: andreeray
 * @Date:   2017-09-19T16:16:50+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T18:50:15+02:00
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
        apiKey: "AIzaSyDKGe9DnsNYIUooqkJv-DNlaBwqnIfwr3s",
        authDomain: "wikiandreeray.firebaseapp.com",
        databaseURL: "https://wikiandreeray.firebaseio.com",
        projectId: "wikiandreeray",
        storageBucket: "wikiandreeray.appspot.com",
        messagingSenderId: "364991953773"
    }

    Firebase.initializeApp(config)

} catch (error) {
    console.log("Firebase authentication error",error)
}

export var firebaseRef = Firebase.database().ref()
export var firebasePostsRef = firebaseRef.child('/posts')
export default Firebase
