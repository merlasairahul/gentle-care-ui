import { Stethoscope, Activity, FlaskConical, Baby, Heart, Syringe } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health check-ups and consultations for all ages.",
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description: "Advanced diagnostic testing with quick and accurate results.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Full-service lab with blood tests, urinalysis, and more.",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized care for infants, children, and adolescents.",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Health screenings and vaccinations to keep you healthy.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Comprehensive Care for Your Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From routine check-ups to specialized treatments, we provide a full range of 
            medical services under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;