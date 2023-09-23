// @ts-nocheck
import { CiDollar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { saveAppliedJobs } from "../Utility/LocalStorage";

// @ts-nocheck
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
  } = job;

  const handleApplyJob = () => {
    saveAppliedJobs(idInt);
  };

  return (
    <div className="mt-52">
      <h2 className="text-3xl text-center font-extrabold text-[#1A1919] mb-32">
        Job Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-32">
        <div className="md:col-span-3 lg:md:col-span-3">
          <p className="text-base text-[#757575] mb-6">
            <span className="font-extrabold text-[#1A1919]">
              Job Description:
            </span>
            {job_description}
          </p>
          <p className="text-base text-[#757575] mb-6">
            <span className="font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>
            {job_responsibility}
          </p>
          <p className="text-base text-[#757575] mb-6">
            <span className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </span>
            <br />
            {educational_requirements}
          </p>
          <p className="text-base text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">Experiences: </span>
            <br />
            {experiences}
          </p>
        </div>
        <div className="w-[#424px] h-[#461]">
          <div className="bg-[#F4F1FF]">
            <div className="p-8">
              <span className="text-xl text-[#1A1919] font-extrabold">
                Job Details
              </span>
              <hr className="mt-6" />
              <div className="flex mt-4 gap-1">
                <CiDollar className="mt-1 text-sm text-[#9873FF]"></CiDollar>
                <p className="text-sm font-semibold text-[#757575]">
                  Salary: {salary} (Per Month)
                </p>
              </div>
              <div className="flex mt-4 gap-1">
                <MdOutlineSubtitles className="text-[#9873FF] text-sm mt-1"></MdOutlineSubtitles>
                <p className="text-sm font-semibold text-[#757575]">
                  Job Title: {job_title}
                </p>
              </div>
              <p className="mt-1 text-xl text-[#1A1919] font-extrabold">
                Contact Information
              </p>
              <hr className="mt-6 mb-6" />
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="btn w-full mt-6 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
