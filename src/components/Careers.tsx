'use client'; // Required for client-side features

export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero/Intro Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 py-24 lg:py-32 text-white">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Careers at{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              ARSTEG Solutions
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-50 lg:text-xl">
            Join our innovative team to build cutting-edge software solutions and grow your career with us.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Open{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              We’re always looking for talented individuals. Check back soon for new opportunities!
            </p>
          </div>

          {/* Placeholder for Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Uncomment when jobs are available */}
            {/* {jobs.length > 0 ? (
              jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : ( */}
            <div className="col-span-full text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 shadow-lg">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="mt-6 text-lg font-medium text-gray-700">
                No open positions at the moment.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Check back later or send us your resume at{" "}
                <a href="mailto:careers@arsteg.com" className="text-blue-600 font-semibold hover:underline">
                  careers@arsteg.com
                </a>
              </p>
            </div>
            {/* )} */}
          </div>
        </div>
      </section>

      {/* Optional: Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}