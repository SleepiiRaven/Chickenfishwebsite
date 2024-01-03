let firebaseConfig = {
    apiKey: "AIzaSyCJ_6pbQtYmCPe500kgfvxoJ7vpehsFJIY",
    authDomain: "chickenfish-website.firebaseapp.com",
    projectId: "chickenfish-website",
    storageBucket: "chickenfish-website.appspot.com",
    messagingSenderId: "592661755474",
    appId: "1:592661755474:web:1c5e4630386207daaa118b"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = (kick) => {
    auth.signOut();
    if (kick == true) {
        location.href = "/"
        setTimeout(function() {
            alert("You do not have access to the administrator panel!")}
            , 100);
    } else {
        location.reload();
    }
}