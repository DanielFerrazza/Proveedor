import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { CartProvider } from '../components/CartContext';
import { products } from '../data/products';

export default function Home() {
  const categories = [...new Set(products.map(p => p.category))];
  return (
    <CartProvider>
      <Navbar />
      <section
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-kitchen.jpg')" }}
      >
        <div className="h-full flex items-center justify-center bg-black/30">
          <h1 className="text-4xl text-white font-bold">
            Productos Caseros Premium
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-12">
        {categories.map(category => (
          <section key={category} id={category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === category)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        ))}
      </main>

      <CartSidebar />
    </CartProvider>
  );
}
