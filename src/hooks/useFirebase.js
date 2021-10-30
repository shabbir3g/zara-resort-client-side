import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Pages/Authentication/Firebase/Firebase.init";
import { useHistory } from "react-router-dom";

initialAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const history = useHistory();

    const signInWithGoogle = () => {
        
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    
    }


    const createUserEmailPassword = (email, password, name) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            
            .then(result =>{
                console.log(result.user);
                updateProfile(auth.currentUser, { displayName: name })
            
            })
            .catch((error) => {
                setUser(error.message);
            })
            .finally(() => setIsLoading(false))
        
        }
        const signInUserEmailPassword = (email, password) => {
            
        return signInWithEmailAndPassword(auth, email, password)
            
        
        }
 
    
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))

    
        
        history?.push("/login");
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);

        });

        return () => unsubscribe;

    }, [])

    return {
        signInWithGoogle,
        createUserEmailPassword,
        signInUserEmailPassword,
        logOut,
        isLoading,
        setError, 
        error,
        user
    }



};

export default useFirebase;