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
      jobId: job.id,
      fullName: fullName,
      email: email,
    };

    const result = await postApplication(application);

    if (result) {
      submitCallback();
    }
  };

  return (
    <form style={{ width: `90%` }}>
      <Stack direction="column" spacing={2}>
        <TextField
          id="full-name"
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          id="email"
          label="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Button variant="contained" color="success" type="submit">
          Submit Application
        </Button>
      </Stack>
    </form>
  );
}
