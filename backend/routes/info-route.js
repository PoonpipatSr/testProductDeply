import express from "express"
import { getStudentPlan, getStudyPlan } from "../repositories/info-repository.js"

const route = express.Router();

route.get("/studies", async (req, res) => {
    const studies = await getStudyPlan();
    res.send(studies)
})

route.get("/students", async (req, res) => {
    const students = await getStudentPlan();
    res.send(students)
})

export default route;