
import Link from 'next/link';



export default function JobCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-600 mb-4"><strong>Type:</strong> {job.type}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
        <p className="text-gray-600">{job.description}</p>
      </div>
       */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Requirements</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {/* {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))} */}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {/* {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))} */}
        </ul>
      </div>
      
      <Link
        href="/apply" // Update to your application route or form
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </Link>
    </div>
  );
}