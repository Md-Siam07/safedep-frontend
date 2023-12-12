import React from 'react';
import { Steps } from 'antd';

interface ReportProps {
  detectionResult: any;
}

const Report: React.FC<ReportProps> = ({ detectionResult }) => {
  const description = 'This is a description.';
  let keys = [
    'Personal Identity Information',
    'System File Access',
    'Process Creation',
    'Network Access',
    'Crypto Functionality',
    'Data Encoding',
    'Dynamic Code Generation',
    'Package Installation',
    'Geolocation',
    'Minified Code',
    'Has No Content',
    'Longest Line',
    'Number of Files',
    'Has License',
  ];

  return (
    <div className="mt-8 flex">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 py-2 bg-gray-50 text-center text-gray-900">
                  Feature
                </th>
                <th scope="col" className="px-2 py-2 text-center">
                  Presence in Package
                </th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key, index) => (
                <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
                  <th scope="row" className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap">
                    {key}
                  </th>
                  <td className="px-2 py-3 text-center flex items-center justify-center">
                    {index < 11 ? (
                      <div className="relative">
                        {detectionResult?.features?.[index] === 0 ? (
                          <>
                            <svg className="w-3 h-3 text-red-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3 text-green-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                          </>
                        )}
                      </div>
                    ) : (
                      detectionResult?.features?.[index]
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
      <div className="flex flex-col w-2/5 pl-20 ml-10">
        <div className="font-bold text-xl mb-4 ml-5">METHODOLOGY</div>
        <div className="flex flex-col">
          <Steps
            direction="vertical"
            current={6}
            items={[
              {
                title: 'Package Installation',
                description: 'The package is built and installed on the system',
              },
              {
                title: 'Feature Extraction',
                description: 'The package is analyzed and features are extracted',
              },
              {
                title: 'Detection',
                description: 'The package is classified as benign or malicious',
              },
              {
                title: 'Reproducibility Check',
                description: 'The package is checked for reproducibility',
              },
              {
                title: 'Clone Check',
                description: 'The package is checked for cloning',
              },
              {
                title: 'Report',
                description: 'The report is generated',
              },
              {
                title: 'Feedback',
                description: 'The user can provide feedback on the report generated',
              }
            ]}
            className="p-4" // Add padding to the Steps component
          />
        </div>
      </div>
    </div>
  );
};

export default Report;
