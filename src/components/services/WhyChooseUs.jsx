// components/WhyChooseUs.jsx
const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Small Team Agility',
      description: 'With 50–200 experts, we deliver personalized service without corporate bureaucracy.',
    },
    {
      title: 'Proven Track Record',
      description: '4.8+ ratings on Clutch/GoodFirms, with successes in fintech, real estate, logistics, edtech, and more.',
    },
    {
      title: 'Cost-Effective Excellence',
      description: 'Hourly rates starting at $15/hr; fixed-price options for predictability.',
    },
    {
      title: 'Global Delivery',
      description: 'India-based with timezone-aligned collaboration for US/EU clients.',
    },
  ];

  return (
    <section className="bg-blue-50 p-6 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;