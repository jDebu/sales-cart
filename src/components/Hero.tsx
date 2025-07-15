import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[70vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Star className="mr-1 h-4 w-4" />
            Calidad Premium
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Polos de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Alta Calidad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección exclusiva de polos premium. 
            Estilo, comodidad y elegancia en cada prenda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-xl shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Ver Catálogo
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Conocer Más
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Truck className="h-6 w-6 text-white" />
              <span className="font-medium text-white">Envío Gratis</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-white" />
              <span className="font-medium text-white">Garantía Total</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Star className="h-6 w-6 text-white" />
              <span className="font-medium text-white">Mejor Precio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};