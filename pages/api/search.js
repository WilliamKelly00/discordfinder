import { searchServers } from "../../lib/redis";

export default async function handler(req, res) {
    const q = req.query.q;
    const servers = await searchServers(q);
    res.status(200).json({servers});
}