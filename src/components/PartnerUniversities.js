import React from 'react';

const PartnerUniversities = () => {
    
  const universities = [
    { name: 'Addis Ababa University', logo: 'path/to/harvard.png' },
    { name: 'Gonder University', logo: 'path/to/stanford.png' },
    { name: 'Haramaya University', logo: 'path/to/mit.png' },
    { name: 'Bahirdar university', logo: 'path/to/columbia.png' },
    { name: 'Adama University', logo: 'path/to/cambridge.png' },
    { name: 'AAST University', logo: 'path/to/oxford.png' },
    { name: 'Debre Birhan University', logo: 'path/to/yale.png' },
  ];

  return (
    
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Partner Universities</h2>
        <p className="text-xl mb-4">Trusted by over 1,500 Teachers and millions of learners around the Country</p>
        <div className="flex justify-center space-x-8">
          {universities.map((university, index) => (
            <img key={index} src={university.logo} alt={university.name} className="h-12" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
