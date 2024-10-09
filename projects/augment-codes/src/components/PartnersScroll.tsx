import React from 'react';

const partners = [
  { name: 'TechCorp', color: '#3B82F6' },
  { name: 'InnovateSoft', color: '#10B981' },
  { name: 'DataDynamics', color: '#F59E0B' },
  { name: 'CloudSphere', color: '#8B5CF6' },
  { name: 'AI Solutions', color: '#EF4444' },
];

const PartnersScroll = () => {
  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-40 mx-4">
                <svg className="w-40 h-20" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
                  <rect width="160" height="80" fill={partner.color} />
                  <text x="80" y="40" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle" dominantBaseline="middle">
                    {partner.name}
                  </text>
                </svg>
                <p className="text-center mt-2 text-sm font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-240px * 5));
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`;

const PartnersScrollWithStyles = () => (
  <>
    <style>{styles}</style>
    <PartnersScroll />
  </>
);

export default PartnersScrollWithStyles;