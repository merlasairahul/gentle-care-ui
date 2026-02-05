import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hello, I would like to book an appointment.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;