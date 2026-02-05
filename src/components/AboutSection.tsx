import { GraduationCap, Briefcase, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-soft">
                <img
                  src="/doctor-portrait.jpg"
                  alt="Dr. Sarah Johnson, Medical Director"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Credential card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-soft border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Board Certified</p>
                    <p className="text-sm text-muted-foreground">Internal Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-3">About Our Clinic</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Meet Dr. Sarah Johnson
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 15 years of experience in family medicine, Dr. Johnson founded 
              HealthCare Clinic with a simple mission: to provide exceptional medical care 
              in a warm, welcoming environment.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              "I believe every patient deserves to be heard. Medicine isn't just about 
              treating symptoms—it's about understanding the whole person and helping 
              them live their healthiest life."
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">15+ Years Practice</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10,000+ Patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;