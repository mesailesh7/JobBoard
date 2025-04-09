import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getJob } from "@/utils/api/jobs";
import ApplyJobForm from "@/components/apply/ApplyJobForm";
import ApplyJobDetails from "@/components/apply/ApplyJobDetails";
import NavBar from "@/components/NavBar";
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";
import SuccessfulApplicationMessage from "@/components/apply/SuccessfulApplicationMessage";

const applyJob = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // console.log(getJob(1));

  useEffect(() => {
    getJob(id).then((job) => {
      setJob(job);
      setLoading(false);
    });
  }, [router.isReady, id]);

  const handleApplicationSubmit = () => {
    setSubmitted(true);
  };

  console.log(job);
  console.log(id);
  return (
    <>
      <NavBar />
      {loading ? (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h5">Job not found</Typography>
        </Container>
      ) : (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1">
            Apply for Job
          </Typography>

          <Typography variant="p" component="p" sx={{ py: 4 }}>
            Enter your details to apply for the job
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {submitted ? (
                <SuccessfulApplicationMessage job={job} />
              ) : (
                <ApplyJobForm
                  job={job}
                  submitCallback={handleApplicationSubmit}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <ApplyJobDetails job={job} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default applyJob;
