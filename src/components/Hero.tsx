import { ArrowRight, Users, Briefcase, Globe, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Briefcase, value: '200+', label: 'Projects Delivered' },
    { icon: Users, value: '50+', label: 'Expert Engineers' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '20+', label: 'Countries Served' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Innovate with <span className="text-accent">ARSTEG Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Transforming ideas into powerful mobile, web, and desktop applications since 2015
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg text-white/95 leading-relaxed">
                Welcome to ARSTEG Solutions Pvt. Ltd., a dynamic software services company based in Gurugram, Haryana. We specialize in custom software development, advanced API integrations, and scalable solutions that drive business success worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div 
              
              
                className="text-base"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
              <div 
                
                
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
               
              >
                Explore Services
              </div> 
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero-illustration.jpg" 
                alt="Modern software development ecosystem with connected devices and applications"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-scale-in">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="h-8 w-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
