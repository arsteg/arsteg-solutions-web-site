// components/ServiceSection.jsx
const ServiceSection = ({ title, description, subsections }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {subsections.map((subsection, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium text-gray-800">{subsection.title}</h3>
            <p className="text-gray-600">{subsection.details}</p>
            {subsection.technologies && (
              <p className="text-sm text-gray-500 mt-2">
                <strong>Technologies:</strong> {subsection.technologies}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;