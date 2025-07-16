import { useCart } from './CartContext';
export default function ProductCard({ product }) {
  const { add } = useCart();
  let defaultSize = product.sizes[0];
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg flex flex-col">
      <h3 className="font-semibold mb-2">{product.name}</h3>
      <select id="size" className="border p-1 rounded mb-2">
        {product.sizes.map(s=> <option key={s.label} value={s.label}>{s.label} - €{s.price}</option>)}
      </select>
      <input type="number" defaultValue={1} min={1} className="border p-1 rounded mb-2" id="qty" />
      <button
        onClick={() => {
          const size = document.getElementById(`size-${product.id}`).value;
          const priceObj = product.sizes.find(s=>s.label===size);
          const qty = parseInt(document.getElementById(`qty-${product.id}`).value);
          add(product, priceObj, qty);
        }}
        className="mt-auto bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
      >Añadir</button>
    </div>
  );
}
