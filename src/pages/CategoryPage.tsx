import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CartProvider } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Por ahora filtramos todos los productos, más adelante se conectará con la base de datos
  const categoryProducts = products;

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">
                  {categoryName?.replace('-', ' ')}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header de la categoría */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 capitalize">
              {categoryName?.replace('-', ' ')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra colección exclusiva de {categoryName?.replace('-', ' ')} 
              con la mejor calidad y diseños únicos.
            </p>
            <Badge className="mt-4 bg-primary text-primary-foreground">
              {categoryProducts.length} productos disponibles
            </Badge>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/producto/${product.id}`} className="block">
                  <div className="mb-4 overflow-hidden rounded-lg group-hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </main>

        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default CategoryPage;