'use client'; // Required if using client-side features like animations or form handling
import { Job } from '../types';
import JobCard from './JobCard';

// Mock job data based on typical career page content (replace with your actual data or API)
const jobs: Job[] = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description: 'Join our team to develop innovative software solutions for clients worldwide.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '3+ years of experience in JavaScript, TypeScript, or similar',
      'Proficiency in frameworks like React or Node.js',
      'Strong problem-solving skills',
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews and testing',
    ],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create intuitive and visually appealing user interfaces for our products.',
    requirements: [
      '2+ years of experience in UI/UX design',
      'Proficiency in tools like Figma, Sketch, or Adobe XD',
      'Strong portfolio showcasing design projects',
      'Understanding of user-centered design principles',
    ],
    responsibilities: [
      'Design user interfaces and prototypes',
      'Conduct user research and usability testing',
      'Collaborate with developers to implement designs',
      'Ensure brand consistency across products',
    ],
  },
  // Add more jobs as needed
];

export default function Career() {
  return (
    <div className="bg-gray-100">
      {/* Hero/Intro Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at Arsteg Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join our innovative team to build cutting-edge software solutions and grow your career with us.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Open Positions
          </h2>
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No open positions at the moment. Check back later!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}