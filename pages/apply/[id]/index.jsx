import React from "react";
import { useRouter } from "next/router";

const applyJob = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>applyJob {id}</div>;
};

export default applyJob;
