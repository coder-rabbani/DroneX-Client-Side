import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile   } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


     //create user with email and pass    
     const registerUser = (email, name, password, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email:email, displayName:name};
            setUser(newUser);

            //save to db
            saveUserToDb(email, name, 'POST');

            //send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {

            });

            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally( ()=> setIsLoading(false));
    }


    //signin user with email and pass
    const loginUser = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally( ()=> setIsLoading(false));
  }


    //observe user state (observer)
    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            setUser(user);  
          } else {
            setUser({});
          }
          setIsLoading(false);
        });
        return () => unsubscribed;
  }, [])

    //admin user setting
    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    }, [user.email]);

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( ()=> setIsLoading(false));
    }

    //save user info to database
    const saveUserToDb = (email, displayName, method)=>{
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
          method: method,
          headers: {
            'content-type' : 'application/json'
          }, 
          body: JSON.stringify(user)
        })
        .then()
      }

    return (
        user, 
        registerUser,
        admin,
        isLoading,      
        authError,
        loginUser,
        logOut
    );
};

export default useFirebase;