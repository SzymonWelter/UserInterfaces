import firabase from "firebase";

firabase.initializeApp({
  apiKey: "AIzaSyBzowfo6Hzfbh4XBKSBA1dYQsu3C343hMM",
  authDomain: "ipam-1d9fa.firebaseapp.com",
  databaseURL: "https://ipam-1d9fa.firebaseio.com",
  projectId: "ipam-1d9fa",
  storageBucket: "ipam-1d9fa.appspot.com",
  messagingSenderId: "527698122234",
  appId: "1:527698122234:web:504e9882547eb181908043"
});

const db = firabase.database();

function get(name){
  return db.ref(name).once('value');
}

function add(name, data){
  return db.ref(`${name}/${data.name}`).set(data);
}

export default {
  get,
  add
}