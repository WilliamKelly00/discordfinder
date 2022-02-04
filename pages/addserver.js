import ServerForm from "../Components/ServerForm";
import { Typography } from '@mui/material'

export default function addserver() {
  return (
  <div className="form">
    <Typography variant='h2'
    sx={{ color: 'text.primary', fontSize: 60, fontWeight: '700' }}
    >Add Your Own Server!</Typography>
    <ServerForm />
  </div>
  );
}
