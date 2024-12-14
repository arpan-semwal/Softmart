// controllers/schoolController.ts
import { RequestHandler } from "express";

import { generateToken } from "../utils/tokenUtils";
import School from "../models/School";
import { entityManager } from "../config/db.config";

export const registerSchool: RequestHandler = async (req, res) => {
	console.log(req.body);
  const { email, schoolName, schoolCity, schoolState, schoolMobile } = req.body;



  try {
    const existingSchool = await entityManager.findOne(School, { where: { email } });
    if (existingSchool) {
      res.status(400).json({ message: "Email is already registered" });
      return; // Ensures the function does not proceed further
    }

    const school = new School();
    Object.assign(school, { email, schoolName, schoolCity, schoolState, schoolMobile });
    await entityManager.save(school);

    const token = generateToken(school.id);
	console.log('Generated Token:', token); // Debugging token
    res.status(201).json({ message: "Registration successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


 