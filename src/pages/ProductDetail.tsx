import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Star, ShoppingCart, Heart, Share, MessageSquare, User } from 'lucide-react';

const ProductDetailContent: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "María García",
      rating: 5,
      comment: "Excelente calidad, la tela es muy suave y el ajuste perfecto. Totalmente recomendado.",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "Carlos López",
      rating: 4,
      comment: "Muy buen producto, llegó rápido y en perfectas condiciones. El color es tal como se ve en las fotos.",
      date: "2024-01-10"
    }
  ]);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Producto no encontrado</h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setSelectedSize('');
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment = {
      id: comments.length + 1,
      user: "Usuario Anónimo",
      rating: 5,
      comment: newComment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
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
              <BreadcrumbLink asChild>
                <Link to="/categoria/polos">Polos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-foreground rounded-full"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 bg-white/80 hover:bg-white text-foreground rounded-full"
              >
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
                {product.color}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-muted-foreground">({comments.length} reseñas)</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="text-4xl font-bold text-primary mb-6">
                ${product.price}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Talla
                  </label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una talla" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map(size => (
                        <SelectItem key={size} value={size}>
                          Talla {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold py-6 rounded-xl shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>
              </div>
            </div>

            {/* Características del producto */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-4">Características</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 100% algodón premium</li>
                <li>• Corte moderno y cómodo</li>
                <li>• Resistente al lavado</li>
                <li>• Disponible en múltiples tallas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección de comentarios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Reseñas y Comentarios ({comments.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Agregar comentario */}
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Deja tu comentario</h4>
              <Textarea
                placeholder="Escribe tu opinión sobre este producto..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3"
              />
              <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                Publicar Comentario
              </Button>
            </div>

            {/* Lista de comentarios */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-foreground">{comment.user}</span>
                        <div className="flex items-center">
                          {[...Array(comment.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <WhatsAppButton />
    </div>
  );
};

const ProductDetail: React.FC = () => {
  return (
    <CartProvider>
      <ProductDetailContent />
    </CartProvider>
  );
};

export default ProductDetail;