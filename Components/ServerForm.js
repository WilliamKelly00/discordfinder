export default function ServerForm(){
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);
        const res = await fetch('/api/servers', {
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
            <input type="text" name="name"/>
            <input type="text" name="link"/>
            <input type="text" name="image"/>
            <input type="text" name="description"/>
            <button type="submit">Submit</button>
        </form>
    );
}