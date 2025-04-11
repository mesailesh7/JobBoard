import React, { useState, useEffect } from "react";
import { getApplications, deleteApplication } from "../../utils/api/jobs";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications().then((data) => setApplications(data));
    setLoading(false);
  }, []);

  console.log(applications);

  return <div>applications</div>;
};

export default Applications;
