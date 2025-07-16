import { useCart } from './CartContext';
export default function CartSidebar() {
  const { cart, remove } = useCart();
  const total = cart.reduce((sum,i)=>sum + i.size.price * i.qty, 0);
  return (
    <aside className="fixed right-0 top-16 w-80 bg-white/90 p-4 shadow-lg">
      <h2 className="font-bold mb-4">Tu Pedido</h2>
      <ul className="space-y-2">
        {cart.map((item,i)=>(
          <li key={i} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm">{item.size.label} x{item.qty}</p>
            </div>
            <div className="text-right">
              <p>€{(item.size.price * item.qty).toFixed(2)}</p>
              <button onClick={()=>remove(i)} className="text-red-500 text-sm">X</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: €{total.toFixed(2)}</p>
      <button
        className="w-full bg-orange-500 text-white py-2 mt-2 rounded hover:bg-orange-600"
        onClick={() => {
          const body = cart.map(i=>`- ${i.name} (${i.size.label}) x${i.qty}: €${(i.size.price*i.qty).toFixed(2)}`).join('\n');
          window.location.href = `mailto:tucorreo@dominio.com?subject=Pedido&body=${encodeURIComponent(body)}`;
        }}
      >Enviar Pedido</button>
    </aside>
  );
}
