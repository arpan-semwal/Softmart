// controllers/schoolController.ts
import { RequestHandler } from "express";
import { generateToken } from "../utils/tokenUtils";
import School from "../models/School";
import { entityManager } from "../config/db.config";

export const registerSchool: RequestHandler = async (req, res) => {
  const { email, schoolName, schoolCity, schoolState, schoolMobile } = req.body;

  try {
    const existingSchool = await entityManager.findOne(School, { where: { email } });
    if (existingSchool) {
      res.status(400).json({ message: "Email is already registered" });
      return;
    }

    const school = new School();
    Object.assign(school, { email, schoolName, schoolCity, schoolState, schoolMobile });
    await entityManager.save(school);

    const token = generateToken(school.id);  // Token generation with school ID
    res.status(201).json({ message: "Registration successful", token, schoolId: school.id }); // Return schoolId
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
