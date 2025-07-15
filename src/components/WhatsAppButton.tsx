import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "51999999999"; // Cambia por tu número de WhatsApp
  const message = "¡Hola! Me interesa conocer más sobre sus productos.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};