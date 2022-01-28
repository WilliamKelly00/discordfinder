import { createServer } from "../../lib/redis";

export default async function handler(req, res) {
    const id = await createServer(req.body);
    res.status(200).json({ id });
}