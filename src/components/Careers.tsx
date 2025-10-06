'use client'; // Required for client-side features


// Mock job data (replace with actual data or API)


export default function Career() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero/Intro Section */}
      <section className="py-12 sm:py-16 bg-blue-400 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h6 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Careers at Arsteg Solutions
          </h6>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Join our innovative team to build cutting-edge software solutions and grow your career with us.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
            Open Positions
          </h2>
          {/* {jobs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-base sm:text-lg">
              No open positions at the moment. Check back later!
            </p>
          )} */}
        </div>
      </section>
    </div>
  );
}