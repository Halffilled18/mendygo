import React from 'react';
import Image from 'next/image';
import Hero from '../../assets/hmc.svg';
import Dayco from '../../assets/dayco.png';
import Tata from '../../assets/tata.webp';
import Smh from '../../assets/smh.webp';
import Maruti from '../../assets/maruti.webp';
import Marelli from '../../assets/marelli.png';

const companies = [
  { name: 'SKH Group', image: Smh },
  { name: 'Hero Moto', image: Hero },
  { name: 'Marelli', image: Marelli },
  { name: 'Tata Motors', image: Tata },
  { name: 'Dayco', image: Dayco },
  { name: 'Maruti', image: Maruti },
];

const CompanySlider = () => {
  const allLogos = [...companies, ...companies];

  return (
    <div className="overflow-hidden w-full py-8 bg-white dark:bg-black">
      <div className="animate-scroll flex whitespace-nowrap gap-16">
        {allLogos.map((company, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px]">
            <div className="relative w-20 h-20 mb-2">
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-800 dark:text-white font-medium mt-4">
              {company.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanySlider;