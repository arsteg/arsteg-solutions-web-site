import Link from "next/link";

export default function JobCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

      <div className="relative z-10">
        {/* Uncomment when job data is available */}
        {/* <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
          <span><strong>Location:</strong> {job.location}</span>
          <span><strong>Type:</strong> {job.type}</span>
        </div> */}

        {/* Requirements */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Requirements
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
            {/* {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))} */}
            <li>3+ years of experience in full-stack development</li>
            <li>Proficiency in React.js, Node.js, and TypeScript</li>
            <li>Strong understanding of RESTful APIs and microservices</li>
            <li>Experience with cloud platforms (AWS/Azure)</li>
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Responsibilities
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
            {/* {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))} */}
            <li>Design and develop scalable web applications</li>
            <li>Collaborate with cross-functional teams</li>
            <li>Write clean, maintainable, and efficient code</li>
            <li>Mentor junior developers and conduct code reviews</li>
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/apply"
          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
        >
          Apply Now
          <svg
            className="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}