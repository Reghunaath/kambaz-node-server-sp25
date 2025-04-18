import AssignmentModel from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function findAssignmentsForCourse(courseId) {
  return AssignmentModel.find({ course: courseId });
}
export async function createAssignment(assignment) {
  if (!assignment._id) {
    assignment._id = uuidv4();
  }
  const existing = await AssignmentModel.findById(assignment._id);
  if (existing) {
    await AssignmentModel.updateOne({ _id: assignment._id }, assignment);
    return AssignmentModel.findById(assignment._id);
  } else {
    return AssignmentModel.create(assignment);
  }
}
export function deleteAssignment(assignmentId) {
  return AssignmentModel.deleteOne({ _id: assignmentId });
}
