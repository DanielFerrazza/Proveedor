import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/"><h1 className="text-xl font-bold text-orange-600">SofriCat</h1></Link>
        <div className="space-x-4">
          <Link href="#Fondos"><button>Fondos</button></Link>
          <Link href="#Sofritos"><button>Sofritos</button></Link>
          <Link href="#Bechamel"><button>Bechamel</button></Link>
        </div>
      </div>
    </nav>
  );
}
