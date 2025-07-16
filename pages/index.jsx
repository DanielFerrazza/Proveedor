import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { CartProvider } from '../components/CartContext';
import { products } from '../data/products';

export default function Home() {
  const cats = [...new Set(products.map(p=>p.category))];
  return (
    <CartProvider>
      <Navbar />
      <div className="relative">
        <section className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('/bg-kitchen.jpg')` }}>
          <div className="h-full flex items-center justify-center bg-black/30">
            <h1 className="text-4xl text-white font-bold">Productos Caseros Premium</h1>
          </div>
        </section>
        <main className="max-w-7xl mx-auto p-6 grid gap-8">
          {cats.map(cat => (
            <section id={cat} key={cat} className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-600">{cat}</h2>
              <div className="grid grid-cols- repeat(auto-fill,minmax(240px,1fr)) gap-6">
                {products.filter(p=>p.category===cat).map(p=> <ProductCard key={p.id} product={p} />)}
              </div>
            </section>
          ))}
        </main>
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
