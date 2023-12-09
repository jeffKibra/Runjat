import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxuaL5LfExvMrPj_hcBQZtg6gGnZ4GAcc",
  authDomain: "finitecr-blogs.firebaseapp.com",
  projectId: "finitecr-blogs",
  storageBucket: "finitecr-blogs.appspot.com",
  messagingSenderId: "601844151897",
  appId: "1:601844151897:web:b2acb95c8c25959be96348",
  measurementId: "G-Z3F7TFRRYW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const isWeb = await isSupported();
// let analytics_ = null;
// if (isWeb) {
//   analytics_ = getAnalytics(app);
// }
// export const analytics = analytics_;
