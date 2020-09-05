import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA656_ICx_6YWkNZLwadKp2jHncBDoXYvQ",
	authDomain: "fb-clone-1a629.firebaseapp.com",
	databaseURL: "https://fb-clone-1a629.firebaseio.com",
	projectId: "fb-clone-1a629",
	storageBucket: "fb-clone-1a629.appspot.com",
	messagingSenderId: "1096302492826",
	appId: "1:1096302492826:web:066a864fa5b6b11038f323",
	measurementId: "G-257CJZ2BBV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
