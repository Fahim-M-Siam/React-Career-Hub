const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  } else {
    return [];
  }
};

const saveAppliedJobs = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exists = storedJobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, saveAppliedJobs };
