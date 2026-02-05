import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hello, I would like to book an appointment.");

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Your Health, <br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Compassionate care for you and your family. Experience modern healthcare 
              with a personal touch at our welcoming clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="gap-2"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">15+</span>
                </div>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">10K+</span>
                </div>
                <span className="text-sm text-muted-foreground">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-soft">
              <img
                src="/hero-clinic.jpg"
                alt="Modern medical clinic with friendly staff"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-soft border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Open Today</p>
                  <p className="text-sm text-muted-foreground">8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;