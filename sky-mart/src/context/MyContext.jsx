import { Children } from "react";
import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [productsData, setProductsData] = useState(JSON.parse(localStorage.getItem("products"))||[])

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartitems"))|| [])

    const [isCartOpen, setIsCartOpen] = useState(false)

    //h
    const addToCart = (product)=>{
        const isAdded = cartItems.some((item)=>item.id===product.id)
        if(!isAdded){
            let arr =[...cartItems,product]
            setCartItems(arr)
            localStorage.setItem("cartitems",JSON.stringify(arr))
        }
    }
    
    const totalPrice =()=>{
       return cartItems
              .reduce((acc, value) => {
                return acc + value.price;
              }, 0)
              .toFixed(2)
    }

    return(
        <MyStore.Provider value={{productsData,setProductsData,cartItems,setCartItems,addToCart,totalPrice,isCartOpen,setIsCartOpen}}>
            {children}
        </MyStore.Provider>
    )

}