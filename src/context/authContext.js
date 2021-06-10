import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";

// Creating a global context for Auth validations
const AuthContext = createContext();

// custom hook to get the user context
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cancelSubcription = auth.onAuthStateChanged((userState) => {
            setUser(userState);
            setLoading(false);
        });

        return cancelSubcription;
    }, []);

    return (
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext, useAuth };