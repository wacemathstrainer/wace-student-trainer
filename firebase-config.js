// firebase-config.js -- Firebase project configuration
// ENCODING: This file MUST be pure ASCII.
//
// HOW TO SET UP:
// 1. Go to https://console.firebase.google.com
// 2. Click "Create a project" (or "Add project")
// 3. Name it something like "wace-student-trainer"
// 4. Disable Google Analytics (not needed)
// 5. Once created, click the web icon </> to add a web app
// 6. Copy the firebaseConfig object and paste it below
// 7. Go to Firestore Database > Create database > Start in test mode
// 8. Go to Authentication > Get started > Enable Anonymous sign-in
//
// IMPORTANT: This config is safe to be public. Firebase security rules
// (set in the Firebase console) control who can read/write data,
// not this config file.

var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAG6ny75XJg2L-73G4qpV6_bP5yoxhhGiQ",
    authDomain: "wace-student-trainer.firebaseapp.com",
    projectId: "wace-student-trainer",
    storageBucket: "wace-student-trainer.firebasestorage.app",
    messagingSenderId: "3123704504",
    appId: "1:3123704504:web:8c2cabd6ddf47b7c27fa4d"
};

// Class code for this deployment (students enter this to join)
var CLASS_CODE = "METHODS2026P2";

// Set to true once you have pasted your Firebase config above
var FIREBASE_ENABLED = true;
