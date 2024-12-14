import { Request, Response } from "express";
import { getList } from "../models/Users"; // Correct import for named export

const userInfo = {
    getList: async (req: Request, res: Response) => {
        try {
            let mydata = await getList(); // Correct usage of getList function
            res.json({ data: mydata });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data dsadasd' });
        }
    }
};

export default userInfo;
