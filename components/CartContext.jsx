import { createContext, useState, useContext } from 'react';
const CartCtx = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const add = (product, size, qty) => setCart(prev => {
    const idx = prev.findIndex(i=>i.id===product.id&&i.size===size);
    if(idx>-1) prev[idx].qty += qty;
    else prev.push({ ...product, size, qty });
    return [...prev];
  });
  const remove = (index) => setCart(prev=>prev.filter((_,i)=>i!==index));
  return <CartCtx.Provider value={{ cart, add, remove }}>{children}</CartCtx.Provider>;
}
export const useCart = () => useContext(CartCtx);
