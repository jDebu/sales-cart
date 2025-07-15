import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid3X3 } from 'lucide-react';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-primary text-primary-foreground border-0">
                <Grid3X3 className="mr-1 h-4 w-4" />
                Catálogo Premium
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nuestra Colección de Polos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explora nuestra selección cuidadosamente elegida de polos premium. 
                Cada prenda está diseñada para ofrecerte el máximo confort y estilo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">PoloStore</h3>
                <p className="text-background/80">
                  La mejor selección de polos premium para tu estilo de vida.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Productos</h4>
                <ul className="space-y-2 text-background/80">
                  <li>Polos Clásicos</li>
                  <li>Polos Deportivos</li>
                  <li>Ediciones Limitadas</li>
                  <li>Ofertas Especiales</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Ayuda</h4>
                <ul className="space-y-2 text-background/80">
                  <li>Guía de Tallas</li>
                  <li>Envíos y Devoluciones</li>
                  <li>Atención al Cliente</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Contacto</h4>
                <ul className="space-y-2 text-background/80">
                  <li>info@polostore.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>Síguenos en redes</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
              <p>&copy; 2024 PoloStore. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
