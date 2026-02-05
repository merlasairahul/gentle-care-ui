import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <span className="font-semibold text-xl">HealthCare Clinic</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Providing compassionate, patient-centered healthcare for families 
              and individuals in our community for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-background transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@healthcare-clinic.com" className="hover:text-background transition-colors">
                  info@healthcare-clinic.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Medical Center Drive, Downtown</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>© {currentYear} HealthCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;