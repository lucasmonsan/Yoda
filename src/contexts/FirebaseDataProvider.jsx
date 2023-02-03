import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../services/FirebaseConfig";
import { authGoogleContext } from "./AuthGoogleProvider";

export const FirebaseDataContext = createContext({});

export const FirebaseDataProvider = ({ children }) => {
  const { user } = useContext(authGoogleContext);
  
  const [userData, setUserData] = useState(null);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");
  
  useEffect(() => {
    const getUserData = async () => {
      const auxUserData = await getDocs(userCollectionRef);
      setUserData(auxUserData.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getUserData();
  }, []);
  
  return (
    <FirebaseDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </FirebaseDataContext.Provider>
  );
}
/*
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
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  }, []);
*/