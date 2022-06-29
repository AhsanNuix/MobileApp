import React,{createContext  , useState , useEffect} from 'react'
export const Store = createContext({});
import product from '../assets/data/product.json'
export default function Context({children}) {
  const [cartArray , setCartArray] = useState([]);
  const [prod , setProd] = useState([])
  useEffect(()=>{
    setProd(product)
  },[])
  return (
    <Store.Provider value={{cartArray , setCartArray , prod , setProd}}>
        {children}
    </Store.Provider>
  )
}
