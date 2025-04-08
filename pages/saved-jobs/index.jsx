import React from "react";
import { useEffect, useState } from "react";
import { getSavedJobsDetails } from "@/utils/api/jobs";

const savedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getSavedJobsDetails();
    console.log("data:", data);
  }, []);

  return <div>savedJobs</div>;
};

export default savedJobs;
