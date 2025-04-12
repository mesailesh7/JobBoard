import React, { useState, useEffect } from "react";
import {
  getApplications,
  deleteApplication,
  getJob,
} from "../../utils/api/jobs";
import {
  Box,
  Typography,
  Container,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "@/components/NavBar";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [jobDetail, setJobDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications().then((data) => setApplications([...data]));
    setLoading(false);

    // Trying to get job with the jobdetails with Jobid
    // const id = applications.map((app) => app.jobId);
    // console.log(id);
    // console.log(getJob(2));
    const getJobDetail = () => {
      applications.map(async (app) => {
        const jobData = await getJob(app.jobId);
        setJobDetail((jobData) => [...prev, jobData]);
      });
    };
    getJobDetail();
  }, []);

  console.log(jobDetail);
  console.log(applications);
  // console.log(applications);

  const handleDelete = async (id) => {
    await deleteApplication(id);
    setApplications(applications.filter((app) => app.id !== id));
    console.log(applications);
  };

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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {applications.length === 0 ? (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography variant="h6">No Job Applied</Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {applications.map((application) => (
                <Grid item xs={12} key={application.id}>
                  <Card
                    elevation={2}
                    sx={{
                      mb: 2,
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Typography variant="h6" component="div" gutterBottom>
                            {application.fullName}
                          </Typography>
                          <Typography color="text.secondary" gutterBottom>
                            Email: {application.email}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Job ID: {application.jobId}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Job Title: {jobDetail.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Comapny: {jobDetail.company}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={4}
                          sx={{
                            display: "flex",
                            justifyContent: {
                              xs: "flex-start",
                              md: "flex-end",
                            },
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(application.id)}
                            sx={{ mt: { xs: 2, md: 0 } }}
                          >
                            Delete Application
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      )}
    </>
  );
};

export default Applications;
