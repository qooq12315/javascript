import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyCFYAQfudXXkRKjVxQ_aR7ZJmY6KtWRL0w",
    authDomain: "project-javascript-3b291.firebaseapp.com",
    projectId: "project-javascript-3b291",
    storageBucket: "project-javascript-3b291.appspot.com",
    messagingSenderId: "467636868546",
    appId: "1:467636868546:web:9a38f14a4f20db9231f25b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));
let contents = ""


querySnapshot.forEach(doc => {
    console.log(doc.id)
    let documentData = doc.data()
    console.log(documentData['productName'])
    contents += `<tr><th scope="row">${doc.id}</th><td>${documentData['productName']}</td><td>${documentData['code']}</td></tr>`
});

let tbodyElement = document.querySelector('#tbody')
tbodyElement.innerHTML = contents