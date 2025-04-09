import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { postApplication } from "@/utils/api/jobs";

export default function ApplyJobForm({ job, submitCallback }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const application = {
      jobId: job.jobId,
      fullName: fullName,
      email: email,
    };

    console.log(job.id);

    const result = await postApplication(application);

    if (result) {
      submitCallback();
    }
  };

  return (
    <form style={{ width: `90%` }} onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <TextField
          id="full-name"
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <TextField
          id="email"
          label="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Button variant="contained" color="success" type="submit">
          Submit Application
        </Button>
      </Stack>
    </form>
  );
}
