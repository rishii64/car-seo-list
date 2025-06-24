import { generateToken } from "../../lib/auth";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        //applied dummy login: accepts anything
        const token = generateToken({ username });
        return res.status(200).json({ token });
    }
    else {
        res.status(405).end();
    }
}