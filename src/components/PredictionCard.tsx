import React from 'react';

interface PredictionCardProps {
  prediction: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const isBenign = prediction?.toLowerCase() === 'benign';
  const alertClass = isBenign ? 'bg-green-50 text-green-800 border-green-300' : 'bg-red-50 text-red-800 border-red-300';

  return (
    <div className={`flex p-4 mb-4 text-sm rounded-lg border ${alertClass}`} role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className={`font-medium ${isBenign ? 'text-green-800' : 'text-red-800'}`}>
          {isBenign ? 'Benign' : 'Malicious'}
        </span>
        <ul className="mt-1.5 list-disc list-inside">
          {isBenign ? (
            <>
              <li>
                <span className="font-medium"></span> <span className="font-normal">This package is predicted as benign.</span>
              </li>
              <li>
                <span className="font-medium"></span> <span className="font-normal">Predictor characteristics are listed below</span>
              </li>
            </>
            
          ) : (
            <>
              <li>
                <span className="font-medium"></span> <span className="font-normal">This package is predicted as malicious.</span>
              </li>
              <li>
                <span className="font-medium"></span> <span className="font-normal">Predictor characteristics are listed below</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PredictionCard;
