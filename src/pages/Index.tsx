import React from 'react';
import { Link } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Grid3X3, ArrowRight, Star, Truck } from 'lucide-react';

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
            
            {/* Sección de Más Vendidos */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Más Vendidos</h3>
                  <p className="text-muted-foreground">Los productos favoritos de nuestros clientes</p>
                </div>
                <Button asChild variant="outline" className="group">
                  <Link to="/categoria/polos" className="flex items-center">
                    Ver todos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/producto/${product.id}`} className="block mb-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                          ¡Más vendido!
                        </Badge>
                      </div>
                    </Link>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de Nuevas Llegadas */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Nuevas Llegadas</h3>
                  <p className="text-muted-foreground">Las últimas incorporaciones a nuestro catálogo</p>
                </div>
                <Button asChild variant="outline" className="group">
                  <Link to="/categoria/polos" className="flex items-center">
                    Ver todos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.slice(2, 6).map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/producto/${product.id}`} className="block mb-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                          ¡Nuevo!
                        </Badge>
                      </div>
                    </Link>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de Características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Envío Gratis</h4>
                  <p className="text-muted-foreground">En compras mayores a $50</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Calidad Premium</h4>
                  <p className="text-muted-foreground">Materiales de la mejor calidad</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Grid3X3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Variedad</h4>
                  <p className="text-muted-foreground">Múltiples colores y tallas</p>
                </CardContent>
              </Card>
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
        
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Index;
