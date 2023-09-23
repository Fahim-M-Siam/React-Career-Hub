// @ts-nocheck
import { useEffect, useState } from "react";
import Job from "../Job/Job";

// @ts-nocheck
const Featuredjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mb-48">
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="text-base font-medium text-center w-[#650px] mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-48">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuredjobs;
