// components/ServicesPage.jsx
import ServiceSection from './ServiceSection';
import WhyChooseUs from './WhyChooseUs';
import ContactCTA from './ContactCTA';

const servicesData = [
  {
    title: 'Custom Software Development',
    description: 'We craft bespoke software solutions tailored to your unique business needs, from automation tools and internal dashboards to enterprise-grade systems. Our approach emphasizes scalability, security, and efficiency, helping you streamline operations and drive growth.',
    subsections: [
      {
        title: 'Desktop Application Development',
        details: 'Build robust, high-performance desktop apps for Windows, macOS, and cross-platform environments. Ideal for enterprise tools, data management, and productivity software.',
        technologies: '.NET, C#, WPF, Java, Python',
      },
      {
        title: 'Web Application Development',
        details: 'Create dynamic, responsive web apps—from simple brochure sites to complex portals—with intuitive UI/UX and seamless backend integration.',
        technologies: 'ASP.NET, PHP, Laravel, React, Angular, Node.js, Spring Boot',
      },
      {
        title: 'Mobile App Development',
        details: 'Develop native, hybrid, and cross-platform apps for iOS and Android, focusing on exceptional user experiences, app store optimization, and IoT/wearables integration.',
        technologies: 'React Native, Flutter, Swift, Kotlin, Android/iOS SDKs',
      },
    ],
  },
  {
    title: 'Product Development',
    description: "We don't just build for today—we innovate for tomorrow. Our in-house products include SaaS platforms, AI-driven analytics tools, and custom ERP/CRM modules, which we adapt and extend for your specific requirements. From MVP to enterprise-ready solutions, we accelerate your time-to-market with lean methodologies.",
    subsections: [
      {
        title: 'SaaS and Custom Products',
        details: 'Design and launch scalable software products, including e-commerce modules, fintech platforms, and IoT dashboards.',
        technologies: 'Cloud-native stacks (AWS, Azure), Java, Python, .NET',
      },
      {
        title: 'Legacy Re-engineering',
        details: 'Modernize outdated systems into agile, cloud-based architectures without disrupting operations.',
      },
    ],
  },
  {
    title: 'Emerging Technologies & Digital Transformation',
    description: 'Stay ahead of the curve with our expertise in next-gen tech. We integrate AI, blockchain, and more to transform your business processes, enabling predictive insights, automation, and enhanced security.',
    subsections: [
      {
        title: 'Artificial Intelligence & Machine Learning',
        details: 'Develop intelligent agents, predictive models, and generative AI solutions for automation, fraud detection, and personalized experiences.',
        technologies: 'Neural networks, Transformer frameworks, NLP, ML libraries (TensorFlow, PyTorch)',
      },
      {
        title: 'Blockchain Development',
        details: 'Secure, decentralized solutions for fintech, supply chain, and transaction friction reduction.',
      },
      {
        title: 'Cloud & DevOps',
        details: 'Optimize infrastructure with CI/CD pipelines, containerization, and scalable architectures for faster deployments and cost savings.',
        technologies: 'AWS, Jenkins, GitLab, Docker, Kubernetes',
      },
      {
        title: 'Metaverse & AR/VR',
        details: 'Immersive experiences for gaming, training, and virtual collaboration.',
      },
      {
        title: 'Data Engineering & Analytics',
        details: 'Build intelligent pipelines for real-time insights, big data processing, and predictive analytics.',
        technologies: 'Big Data tools, SQL/NoSQL (MongoDB, MySQL)',
      },
    ],
  },
  {
    title: 'UI/UX Design & Consulting',
    description: 'Great software starts with great design. Our team bridges user needs and business goals through intuitive interfaces, wireframing, and user testing, boosting engagement and conversion rates.',
    subsections: [
      {
        title: 'UX/UI Design Services',
        details: 'Create visually stunning, accessible designs for web, mobile, and desktop.',
      },
      {
        title: 'IT Consulting & Strategy',
        details: 'Roadmap planning, digital transformation audits, and AI strategy alignment to future-proof your tech stack.',
      },
    ],
  },
  {
    title: 'Dedicated Teams & Hourly Resources',
    description: 'Scale effortlessly with our flexible staffing models. Hire vetted experts on an hourly or dedicated basis for short-term projects or long-term partnerships—no overhead, just results.',
    subsections: [
      {
        title: 'Hourly Developer Resources',
        details: 'Access top talent for specific tasks, billed transparently at competitive rates ($15–$35/hour based on expertise).',
        technologies: 'Full-stack development, DevOps, AI/ML, blockchain, 20+ technologies including React, Node.js, Flutter, AWS',
      },
      {
        title: 'Dedicated Teams',
        details: 'Offshore teams for end-to-end project ownership, with agile collaboration and daily progress updates.',
      },
      {
        title: 'Team Extension',
        details: 'Augment your in-house resources with our engineers for rapid scaling—add 5–25 specialists in weeks.',
      },
    ],
  },
  {
    title: 'Quality Assurance & Support',
    description: 'Ensure flawless delivery with comprehensive testing and ongoing maintenance. We handle everything from automated QA to post-launch support, minimizing downtime and maximizing ROI.',
    subsections: [
      {
        title: 'Software Testing & QA',
        details: 'Manual/automated testing, performance optimization, and security audits.',
        technologies: 'Selenium, JUnit, predictive testing systems',
      },
      {
        title: 'Maintenance & Support',
        details: '24/7 monitoring, bug fixes, and upgrades for sustained performance.',
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            At <b>ARSTEG</b>, we are a dynamic Indian software development firm specializing in innovative, client-centric solutions. As a small, agile team of experts, we blend custom service offerings with our own product innovations to deliver scalable results.
          </p>
        </header>
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <ServiceSection key={index} {...service} />
          ))}
        </div>
        <WhyChooseUs />
        <ContactCTA />
      </div>
    </div>
  );
};

export default ServicesPage;