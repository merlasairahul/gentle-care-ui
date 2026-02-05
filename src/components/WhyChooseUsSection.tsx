import { Award, Clock, ShieldCheck, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    description: "Our team brings decades of medical expertise and proven results.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "We listen first and personalize treatment plans for each patient.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open 7 days a week with extended hours to fit your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description: "Strict protocols ensure a clean, safe environment for everyone.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Healthcare You Can Trust
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe healthcare should be accessible, compassionate, and personalized. 
              Our clinic combines modern medical practices with genuine care for every patient 
              who walks through our doors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustPoints.map((point, index) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-soft">
              <img
                src="/doctor-team.jpg"
                alt="Our friendly medical team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;