import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import TabContent from '../components/TabContent';
import CloneCard from '../components/CloneCard';
import PredictionCard from '../components/PredictionCard';
import ReproducibilityCard from '../components/ReproducibilityCard';
import FinalVerdictCard from '../components/FinalVerdictCard';
import { Typography } from '@mui/material';
import Vote from '../components/Vote';
import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';


const PackageInfo = () => {
  const [activeTab, setActiveTab] = useState('report');
  const [dependencies, setDependencies] = useState<any[]>([]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

const [packageInfo, setPackageInfo] = React.useState<any>(null);
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const package_name = queryParams.get('package_name');
const package_version = queryParams.get('package_version');
const apiUrl = `http://localhost:5001/package?package_name=${package_name}&package_version=${package_version}`;

    const fetchPackageInfo = async () => {
        axios.get(apiUrl).then((response) => {
            setPackageInfo(response.data);
            console.log(response.data);
            }
        )
    }

    useEffect(() => {
        fetchPackageInfo();
    }, []);

    //traverse the entire object keys and append the de
    

  return (

    <div className="mx-auto w-[80%]">
        {packageInfo && (
        <div className="mb-8">
          <div className="flex items-center">
            <Typography variant="h4" gutterBottom style={{ fontFamily: 'Roboto, sans-serif' }} className="pt-4">
              {packageInfo?.name}
            </Typography>
            <img
              src="https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg"
              height={"20px"} width={"20px"}
              title="This package contains built-in TypeScript declarations"
              alt="TypeScript icon, indicating that this package has built-in type declarations"
              className="aa30d277 pl3"
              data-nosnippet="true"
            />
          </div>
          <Typography variant="body1" color="textSecondary" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {packageInfo?.version} • Last Published: {formatDate(packageInfo?.time?.modified)}
          </Typography>
        </div>
      ) }
        {packageInfo && (
            <div className="">
            <ul className="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" role="tablist">
            <li className={`flex-grow hover:bg-red-200 border-b-2 cursor-pointer ${activeTab === 'report' ? 'border-red-900' : ''}`} role="presentation" data-tabs-target="#profile" aria-controls="profile" onClick={() => handleTabClick('report')}>
                <button
                className={`inline-flex items-center justify-center p-4 border-transparent rounded-t-lg hover:text-gray-600 ${activeTab === 'report' ? 'active' : ''}`}
                aria-current={activeTab === 'report' ? 'page' : undefined}
                >
                <svg className="w-4 h-4 me-1 text-gray-400 dark:text-gray-500" fill="#875e5e" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg"  enable-background="new 0 0 1000 1000" stroke="#875e5e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata> <g> <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"> <path d="M1685.8,4989.2c-253.7-58.9-499.3-265.9-621.1-519.6l-75.1-158.3l-6.1-4141c-4.1-2772.8,2-4173.4,16.2-4238.4c56.8-267.9,257.8-513.6,523.7-639.4l156.3-75.1l3258-6.1c2174-4.1,3290.4,2,3355.4,16.2c326.8,69,627.2,365.4,702.4,692.2c14.2,58.9,22.3,1049.5,22.3,2809.4c0,2616.5-2,2724.1-38.6,2801.2c-48.7,101.5-3373.6,3428.5-3458.9,3460.9C5449.2,5017.6,1797.5,5015.6,1685.8,4989.2z M4856.5,3087.2c0-1433.1,2-1451.4,115.7-1648.3c89.3-152.2,253.7-298.4,426.3-381.6l158.3-75.1l1427-6.1l1425-6.1v-2494.7c0-1891.9-6.1-2506.9-24.4-2547.5c-52.8-117.7,148.2-111.6-3385.8-111.6s-3333.1-6.1-3385.8,111.6c-38.6,81.2-34.5,8302.2,4.1,8371.2c58.9,105.6,12.2,101.5,1682.8,103.5h1556.9V3087.2z M6866.1,1585.1c-1351.9-4.1-1337.7-6.1-1380.3,109.6c-12.2,30.5-20.3,552.1-20.3,1293V4230l1319.4-1319.4l1319.4-1319.4L6866.1,1585.1z"></path> <path d="M2989-327.1v-304.5h2009.6h2009.6v304.5v304.5H4998.6H2989V-327.1z"></path> <path d="M2989-1646.5V-1951h2009.6h2009.6v304.5v304.5H4998.6H2989V-1646.5z"></path> <path d="M2989-2925.3v-304.5h954.1h954v304.5v304.5h-954H2989V-2925.3z"></path> </g> </g> </g></svg>
                Report
                </button>
            </li>
            <li className={`flex-grow hover:bg-blue-200 border-b-2 cursor-pointer ${activeTab === 'dependencies' ? 'border-blue-600' : ''}`} role="presentation" data-tabs-target="#dashboard" aria-controls="dashboard" onClick={() => handleTabClick('dependencies')}>
                <button
                className={`inline-flex items-center justify-center p-4 text-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group ${activeTab === 'dependencies' ? 'active' : ''}`}
                aria-current={activeTab === 'dependencies' ? 'page' : undefined}
                >
                <svg className="w-4 h-4 me-1 text-blue-600 dark:text-blue-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cube" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"></path>
                </svg>
                {(
                  (packageInfo?.dependencies && Object.keys(packageInfo.dependencies)?.filter(key => packageInfo.dependencies?.hasOwnProperty(key)).length) +
                  (packageInfo?.peerDependencies && Object.keys(packageInfo.peerDependencies)?.filter(key => packageInfo.peerDependencies?.hasOwnProperty(key)).length) +
                  (packageInfo?.devDependencies && Object.keys(packageInfo.devDependencies)?.filter(key => packageInfo.devDependencies?.hasOwnProperty(key)).length)
                ) || 0} Dependencies

                </button>
            </li>
            <li className={`flex-grow hover:bg-gray-200 border-b-2 cursor-pointer ${activeTab === 'dependents' ? 'border-gray-500' : ''}`} role="presentation" data-tabs-target="#settings" aria-controls="settings" onClick={() => handleTabClick('dependents')}>
                <button
                className="inline-flex items-center justify-center p-4 border-transparent rounded-t-lg group"
                >
                <svg className="w-4 h-4 me-1 text-gray-400 dark:text-gray-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path>
                </svg>
                {packageInfo?.dependencies && Object.keys(packageInfo?.dependencies)?.filter(key => packageInfo?.dependencies?.hasOwnProperty(key))?.length} Dependents
               </button>
            </li>
            <li className={`flex-grow hover:bg-violet-200 border-b-2 cursor-pointer ${activeTab === 'versions' ? 'border-violet-600' : ''}`} role="presentation" data-tabs-target="#contacts" aria-controls="contacts" onClick={() => handleTabClick('versions')}>
                <button
                className="inline-flex items-center justify-center p-4 border-transparent rounded-t-lg group"
                >
                <svg className="w-4 h-4 me-1 text-gray-400  dark:text-gray-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path>
                </svg>
                {packageInfo?.versions?.length} Versions
                </button>
            </li>
            </ul>
        </div>
        )}
        <div id="default-tab-content">
        {packageInfo && (
          <div>
            <div className="flex space-x-4">
              
              <div className="w-1/3 mt-4">
                <PredictionCard prediction={packageInfo?.prediction} />
              </div>
              
              <div className="w-1/3 mt-4">
                <ReproducibilityCard reproducible={packageInfo?.reproducible} prediction={packageInfo?.prediction} />
              </div>
              <div className="w-1/3 mt-4">
                <CloneCard cloned={packageInfo?.cloned} />
              </div>
            </div>
            
            <TabContent activeTab={activeTab} packageDetails={packageInfo} />

            <div className="flex justify-center items-center p-4 bg-gray-50">
              <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
                {/* First card: Logo and Image Section */}
                <div className="flex flex-col items-center justify-center p-8 rounded-md shadow-lg bg-white w-full md:w-96 flex-shrink-0 transition duration-300 transform hover:scale-105">
                  <img
                    src="/malicious.webp" // Replace with actual image URL
                    alt="Malicious Logo"
                    className="w-32 h-32"
                  />
                  <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    {packageInfo?.finalPrediction && (
                      packageInfo.finalPrediction.charAt(0).toUpperCase() + packageInfo.finalPrediction.slice(1)
                    )}  
                  </h1>
                  <p className="text-gray-600 text-center">Let us know your thoughts on the prediction!</p>
                </div>

                {/* Second Card: Prediction and Results */}
                {/* <div className="flex flex-col p-8 rounded-md shadow-lg bg-white w-full md:w-96 ml-4 flex-shrink-0 transition duration-300 transform hover:scale-105">
                  <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Was the prediction accurate?</h2>
                  <div className="flex justify-center">
                    <button
                      className="flex items-center justify-center px-4 py-3 rounded-full bg-green-700 text-white mr-2 transition duration-300 hover:bg-green-800 hover:shadow-md"
                      // onClick={() => handleOptionSelect('yes')}
                    >
                      <FaCheckCircle className="mr-2" />
                      Yes
                    </button>
                    <button
                      className="flex items-center justify-center px-4 py-3 rounded-full bg-red-700 text-white transition duration-300 hover:bg-red-800 hover:shadow-md"
                      // onClick={() => handleOptionSelect('no')}
                    >
                      <FaTimesCircle className="mr-2" />
                      No
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaCheckCircle className="mr-2 text-green-700" />
                      Yes: {packageInfo?.agreedVotes}
                    </div>
                    <div className="flex items-center justify-center">
                      <FaTimesCircle className="mr-2 text-red-700" />
                      No: {packageInfo?.totalVotes - packageInfo?.agreedVotes}
                    </div>
                  </div>
                </div> */}
                <Vote totalVotes={packageInfo?.totalVotes} agreedVotes={packageInfo?.agreedVotes}/>
              </div>
            </div>
          </div>
        )}
        </div>
    </div>

  );
};

const formatDate = (timestamp: any) => {
    if (!timestamp) {
      return ''; // or some default value
    }
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    });
  };

export default PackageInfo;
