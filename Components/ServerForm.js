import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function ServerForm(){
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);
        const res = await fetch('/api/server', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const result = await res.json();
        console.log(result);
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField margin="dense" id="name" name="name" label="Server Name" variant="standard" />
            <br></br>
            <TextField margin="dense" id="link" name="link" label="Link" variant="standard" />
            <br></br>
            <TextField margin="dense" id="image" name="image" label="Image Link" variant="standard" />
            <br></br>
            <TextField margin="dense" id="description" name="description" label="Description" variant="standard" multiline/>
            <br></br>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
}