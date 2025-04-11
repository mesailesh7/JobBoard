import React from "react";
import { useEffect, useState } from "react";
import { getSavedJobsDetails } from "@/utils/api/jobs";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import SavedJobsList from "@/components/savedJobs/SavedJobsList";
import NavBar from "@/components/NavBar";

const savedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSavedJobsDetails();
        setSavedJobs(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {savedJobs.length === 0 ? (
            <Typography variant="body1">No saved jobs found.</Typography>
          ) : (
            <SavedJobsList savedJobs={savedJobs} />
          )}
        </Container>
      )}
    </>
  );
};

export default savedJobs;
