import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc, doc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyATxPrveeLquUgArZLj8g0CbGKOJ_ZZ6KA",
  authDomain: "yoda-monsan.firebaseapp.com",
  projectId: "yoda-monsan",
});

export const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  async function create() {
    const user = await addDoc(userCollectionRef, {
      name, email
    });
  };

  async function erase(id) {
    const user = doc(db, "users", id);
    await deleteDoc(user);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, [])

  return (
    <>
      <h1>Lucas</h1>
    </>
  )
}