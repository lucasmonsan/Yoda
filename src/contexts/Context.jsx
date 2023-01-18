import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc, doc, deleteDoc } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyATxPrveeLquUgArZLj8g0CbGKOJ_ZZ6KA",
  authDomain: "yoda-monsan.firebaseapp.com",
  projectId: "yoda-monsan",
});

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [myFolders, setMyFolders] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");
  const folderCollectionRef = collection(db, "folders");

  async function create() {
    const user = await addDoc(userCollectionRef, {
      name, email
    });
  };

  async function erase(id) {
    const user = doc(db, "users", id);
    await deleteDoc(user);
  };

  useEffect(() => {
    const getFolders = async () => {
      const data = await getDocs(folderCollectionRef);
      setMyFolders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getFolders();
  }, []);

  return (
    <FirebaseContext.Provider value={{myFolders, setMyFolders, users}}>
      {children}
    </FirebaseContext.Provider>
  )
}