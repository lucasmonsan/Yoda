import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../services/FirebaseConfig";

export const authGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  
  const signInGoogle = () => {   
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
      sessionStorage.setItem("@AuthFirebase:token", token);
      sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    }
    loadStoreAuth();
  }, []);

  return (
    <authGoogleContext.Provider value={{signInGoogle, signed: !!user}}>
      {children}
    </authGoogleContext.Provider>
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