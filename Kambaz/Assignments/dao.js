import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}
export function createAssignment(assignment) {
  const newAssignment = assignment;
  if (assignment._id == null) {
    assignment._id = uuidv4();
    Database.assignments = [...Database.assignments, newAssignment];
  } else {
    const assignment = Database.assignments.find(
      (assignment) => assignment._id === assignment._id
    );
    Object.assign(assignment, newAssignment);
  }
  return newAssignment;
}
export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
}
