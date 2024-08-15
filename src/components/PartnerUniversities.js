import React from 'react';

const PartnerUniversities = () => {
  const universities = [
    { name: 'Addis Ababa University', logo: 'path/to/harvard.png' },
    { name: 'Gonder University', logo: 'path/to/stanford.png' },
    { name: 'Haramaya University', logo: 'path/to/mit.png' },
    { name: 'Bahirdar University', logo: 'path/to/columbia.png' },
    { name: 'Adama University', logo: 'path/to/cambridge.png' },
    { name: 'AAST University', logo: 'path/to/oxford.png' },
    { name: 'Debre Birhan University', logo: 'path/to/yale.png' },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Partner Universities</h2>
        <p className="text-xl mb-4">
          Trusted by over 1,500 Teachers and millions of learners around the Country
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {universities.map((university, index) => (
            <div key={index} className="w-1/3 md:w-1/4 lg:w-1/6 p-2 flex justify-center">
              <img
                src={university.logo}
                alt={university.name}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
