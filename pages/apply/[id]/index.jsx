import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getJob } from "@/utils/api/jobs";
import NavBar from "@/components/NavBar";
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";

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

  return (
    <>
      <NavBar />
      {loading ? (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h5">Job not found</Typography>
        </Container>
      ) : (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Apply for {job.title}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {applicationSubmitted ? (
                <SuccessfulApplicationMessage />
              ) : (
                <ApplyJobForm
                  jobId={job.id}
                  submitCallback={handleApplicationSubmit}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <JobDetails job={job} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default applyJob;
