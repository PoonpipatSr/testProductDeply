import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudyPlan = async () => {
    return await prisma.study_plan.findMany({
        select:
            {
                id: true,
                plan_code: true,
                name_eng: true,
                name_th: true
            }
    })
}

export const getStudentPlan = async () => {
    return await prisma.student_plan.findMany({
        select:
            {
                student_id: true,
                plan_id: true,
                created_at: true,
                updated_at: true
            }
    })
}