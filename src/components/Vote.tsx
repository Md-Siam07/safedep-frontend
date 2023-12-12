import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface VoteProps {
  totalVotes: number;
  agreedVotes: number;
}

const Vote: React.FC<VoteProps> = ({ totalVotes, agreedVotes }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const package_name = queryParams.get('package_name');
  const package_version = queryParams.get('package_version');
  const apiUrl = `http://localhost:5001/packages/vote?package_name=${package_name}&package_version=${package_version}`;
  const [yesVotes, setYesVotes] = useState(agreedVotes);
  const [noVotes, setNoVotes] = useState(totalVotes - agreedVotes);
  const [voted, setVoted] = useState(false);

  const handleVote = async (vote: string) => {
    if (!voted) {
      if (vote === 'yes') {
        setYesVotes(yesVotes + 1);
        try {
          await axios.post(apiUrl, { vote: 'Agree' }).then((response: any) => {
            console.log(response);
            toast.success(`You voted ${vote === 'yes' ? 'Yes' : 'No'}`);
          });
        } catch (error) {
          console.log(error);
          toast.error('Something went wrong!');
        }
      } else if (vote === 'no') {
        setNoVotes(noVotes + 1);
        await axios.post(apiUrl, { vote: 'Disagree' }).then((response: any) => {
          console.log(response);
          toast.success(`You voted No`);
        });
      }

      setVoted(true);
    } else {
      alert("You've already voted!");
    }
  };

  return (
    // <div className="border p-4 rounded-md shadow-md">
    //   <p>Do you think the prediction is correct?</p>
    //   <button onClick={() => handleVote('yes')} disabled={voted} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">
    //     Yes
    //   </button>
    //   <button onClick={() => handleVote('no')} disabled={voted} className="bg-red-500 text-white px-3 py-1 rounded-md">
    //     No
    //   </button>
    //   <div className="mt-4">
    //     <strong>Results:</strong>
    //     <p>Yes: {yesVotes}</p>
    //     <p>No: {noVotes}</p>
    //   </div>
    //   {/* Toast Container */}
    //   <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    // </div>
    
                <>
                <div className="flex flex-col p-8 rounded-md shadow-lg bg-white w-full md:w-96 ml-4 flex-shrink-0 transition duration-300 transform hover:scale-105">
                  <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Was the prediction accurate?</h2>
                  <div className="flex justify-center">
                    <button
                      className="flex items-center justify-center px-4 py-3 rounded-full bg-green-700 text-white mr-2 transition duration-300 hover:bg-green-800 hover:shadow-md"
                      onClick={() => handleVote('yes')}
                    >
                      <FaCheckCircle className="mr-2" />
                      Yes
                    </button>
                    <button
                      className="flex items-center justify-center px-4 py-3 rounded-full bg-red-700 text-white transition duration-300 hover:bg-red-800 hover:shadow-md"
                      onClick={() => handleVote('no')}
                    >
                      <FaTimesCircle className="mr-2" />
                      No
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaCheckCircle className="mr-2 text-green-700" />
                      Yes: {yesVotes}
                    </div>
                    <div className="flex items-center justify-center">
                      <FaTimesCircle className="mr-2 text-red-700" />
                      No: {noVotes}
                    </div>
                  </div>
                  
                </div>
                  <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
                </>
  );
};

export default Vote;
