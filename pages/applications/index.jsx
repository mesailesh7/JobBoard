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

  const handleDelete = async (id) => {
    await deleteApplication(id);
    setApplications(applications.filter((app) => app.id !== id));
    console.log(applications);
  };

  return <div>applications</div>;
};

export default Applications;
