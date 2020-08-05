import { Router } from "express";
import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMinutes";

const routes = Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (req, res) => {
  const { name, avatar, bio, cost, schedule, whatsapp, subject } = req.body;

  const insertedUsersIds = await db("users").insert({
    name,
    whatsapp,
    bio,
    avatar,
  });

  const user_id = insertedUsersIds[0];

  const insertedClassesIds = await db("classes").insert({
    subject,
    cost,
    user_id,
  });

  const class_id = insertedClassesIds[0];

  const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
    return {
      week_day: scheduleItem.week_day,
      from: convertHourToMinutes(scheduleItem.from),
      to: convertHourToMinutes(scheduleItem.to),
      class_id,
    };
  });

  await db("class_schedule").insert(classSchedule);

  return res.json();
});

export default routes;
