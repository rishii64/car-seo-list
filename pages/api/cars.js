import { getCars, addCars } from "../../data/cars";
import { verifyToken } from "../../lib/auth";

export default function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(getCars());
    }

    if (req.method === 'POST') {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token || !verifyToken(token)) {
            return res.status(401).json({ error: 'unauthorized' });
        }

        const { brand, model, year, fuel, transmission, price, status } = req.body;

        if (!brand || !model || !year || !fuel || !transmission || !price || !status) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        addCars({ brand, model, year, price, status });
        return res.status(201).json({ message: 'car added successfully!' });
    }
    res.status(405).end();
}