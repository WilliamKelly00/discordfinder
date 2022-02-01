import ServerForm from "../Components/ServerForm";
import { Typography } from '@mui/material'

export default function addserver() {
  return (
  <div>
    <Typography variant='h2'>Add Your Own Server!</Typography>
    <ServerForm />
  </div>
  );
}
