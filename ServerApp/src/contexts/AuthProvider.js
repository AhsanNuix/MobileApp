import React,{createContext  , useState , useEffect} from 'react'
export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [logged , setLogged] = useState(false);
  const [registered, setRegistered] = useState(false);
  return (
    <AuthContext.Provider value={{logged , setLogged ,registered, setRegistered}}>
        {children}
    </AuthContext.Provider>
  )
}
