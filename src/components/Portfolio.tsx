import Image from 'next/image';
import { Activity, Smartphone, Brain, MessageSquare, BarChart3, FileEdit } from 'lucide-react';

// Adjust the image path for Next.js (place dashboard-mockup.jpg in public/assets/)


const Portfolio = () => {
  const projects = [
    {
      icon: Activity,
      title: 'Dynamic User Dashboard',
      description: 'Implemented a responsive dashboard using Vue.js components, enabling users to visually track health metrics and progress in real-time.',
      tech: ['Vue.js', 'ChartJS', 'Real-time Data'],
    },
    {
      icon: Smartphone,
      title: 'Health Device Integrations',
      description: 'Integrated APIs for iHealth, Garmin, Withings, Google Fit, Fitbit, Biosense, Dexcom, and KetoMojo, creating a unified platform to fetch and display health data.',
      tech: ['Vue.js', 'API Integration', 'Multi-Device'],
    },
    {
      icon: Brain,
      title: 'AI-Powered Food Planner',
      description: 'Developed a Vue.js-based Add Food Planner with Open AI integration. Users snap photos of food, and AI scans to list ingredients and nutritional information instantly.',
      tech: ['Vue.js', 'OpenAI', 'Computer Vision', 'Nutrition AI'],
    },
    {
      icon: MessageSquare,
      title: 'Messaging System',
      description: 'Built a communication module using Vue.js and Twilio, allowing users to connect with healthcare providers and receive automated health goal reminders.',
      tech: ['Vue.js', 'Twilio', 'Real-time Messaging'],
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Leveraged Vue ChartJS to create customized summary reports, enabling users to visualize health data through interactive charts and graphs.',
      tech: ['Vue.js', 'ChartJS', 'Data Analytics'],
    },
    {
      icon: FileEdit,
      title: 'Custom Form Builder',
      description: 'Designed a Vue.js-based Form Builder for healthcare providers to create tailored data collection forms for specific patient needs.',
      tech: ['Vue.js', 'Form Builder', 'Customization'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Health-Tech <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At ARSTEG, we specialize in building cutting-edge health-tech solutions that empower users and providers. Our portfolio showcases seamless integrations and intuitive interfaces that drive real-world impact.
          </p>
        </div>

        {/* Featured Dashboard Mockup */}
        <div className="mb-16 animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-card max-w-5xl mx-auto">
            <img
              src='/images/dashboard-mockup.jpg'
              alt="Health-tech dashboard showing fitness metrics and data visualizations"
              className="w-full h-auto"
              width={1200} // Adjust based on your image dimensions
              height={600} // Adjust based on your image dimensions           
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">Health Metrics Dashboard</h3>
              <p className="text-white/80">Real-time data visualization powered by Vue.js and Chart.js</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <project.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
          >
            See More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;