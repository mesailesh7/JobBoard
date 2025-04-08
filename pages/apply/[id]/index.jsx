import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getJob } from "@/utils/api/jobs";

const applyJob = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await getJob(id);
        setJob(jobData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

      fetchJob();
    };
  }, [router.isReady]);

  return <div>applyJob {id}</div>;
};

export default applyJob;
