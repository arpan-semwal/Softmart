import { Request, Response } from "express";
import { getClassList } from "../models/Class"; // Adjust the path if needed

const classController = {
    getClasses: async (req: Request, res: Response) => {
        try {
            const classList = await getClassList();
            res.json({ data: classList });
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch classes: " });
        }
    },
};

export default classController;
