import React from 'react';

interface ReproducibilityCardProps {
  reproducible: number;
  prediction: string;
}

const ReproducibilityCard: React.FC<ReproducibilityCardProps> = ({ reproducible, prediction }) => {
  let textColor = reproducible === 1 ? 'green' : 'red';
  textColor = prediction?.toLowerCase() === 'malicious' ? textColor : 'black';
  let backgroundColor = reproducible === 1 ? 'green' : 'red';
  backgroundColor = prediction?.toLowerCase() === 'malicious' ? backgroundColor : 'gray';
  let alertClass = reproducible === 1 ? 'bg-green-50 text-green-800 border-green-300' : 'bg-red-50 text-red-800 border-red-300';
  alertClass = prediction?.toLowerCase() === 'malicious' ? alertClass : 'bg-yellow-50 text-yellow-800 border-yellow-300';

  return (
    <div>
      <div className={`flex p-4 mb-4 text-sm border rounded-lg ${alertClass}`} role="alert">
        <div>
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
        </div>
        <div className={`font-medium ${textColor}`}>
          {prediction?.toLowerCase() === 'benign' ? 'Reproducibility is unchecked' : (reproducible === 1 ? 'The package is reproducible' : 'The package is not reproducible')}
          <ul className="mt-1.5 list-disc list-inside">
            {
              prediction?.toLowerCase() === 'benign' ? (
                <li>
                  <span className="font-medium"></span> <span className="font-normal">This reproducibility check is skipped because the package is detected benign</span>
                </li>
              ) : 
                reproducible === 1 ? (
                  <li>
                    <span className="font-medium"></span> <span className="font-normal">This package could be reproduced from its git head</span>
                  </li>
                ) : (
                  <li>
                    <span className="font-medium"></span> <span className="font-normal">This package could not be reproduced from its git head</span>
                  </li>
                )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReproducibilityCard;
