import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { data } from "autoprefixer";

export default async function Home() {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsl8Cropru33XKQ7jT3dGFQhG99eu28uc",
  authDomain: "deca-sinclair.firebaseapp.com",
  projectId: "deca-sinclair",
  storageBucket: "deca-sinclair.appspot.com",
  messagingSenderId: "36671834295",
  appId: "1:36671834295:web:806e8ba325551820c0e532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let points;

const querySnapshot = await getDocs(collection(db, "students"));
querySnapshot.forEach((doc) => {
  const data = doc.data();
  console.log(data.points);
  points = data.points;
});


  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <h1 className="text-xl text-blue-700 font-bold">DECA</h1>
    <p>points for andrei: {points}</p>
    </section>
  );
}
