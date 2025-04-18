import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  return model.create({
    user: userId,
    course: courseId,
    _id: `${userId}-${courseId}`,
  });
}
export function unenrollUserFromCourse(userId, courseId) {
  return model.deleteOne({ user: userId, course: courseId });
}
export const findEnrollmentByUserAndCourse = async (userId, courseId) => {
  const enrollment = await model.findOne({
    user: userId,
    course: courseId,
  });
  return enrollment;
};
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
