/* eslint-disable react/prop-types */
// @ts-nocheck
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold text-[#474747] mb-2">
            {job_title}
          </h2>
          <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
          <div className="mt-4">
            <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex mt-4 gap-1">
              <CiLocationOn className="text-xl mt-1"></CiLocationOn>
              <p className="text-xl font-semibold text-[#757575]">{location}</p>
            </div>
            <div className="flex mt-4 gap-1">
              <CiDollar className="mt-1 text-xl"></CiDollar>
              <p className="text-xl font-semibold text-[#757575]">
                Salary: {salary}
              </p>
            </div>
          </div>
          <div className="card-actions mt-8">
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
