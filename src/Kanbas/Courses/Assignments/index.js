import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col float-end" style={{ paddingBottom: "10px" }}>
        <form action="index.html" style={{ display: "inline" }}>
          <input class="form-control float-start justify-content-start" type="text" placeholder="Search for Assignment" id="text-fields-search-students" style={{ width: "250px" }} />
          <div class="float-end justify-content-end">
            <button type="button" class="btn btn-outline-secondary" style={{ marginRight: 10 }}> + Group</button>
            <button type="button" class="btn btn-danger"> + Assignment</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="assignments-list-group">
        <ul>
          <p className="assignments-title">
            Assignments - 40% of total
          </p>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
              <FaCheckCircle className="float-end" style={{ color: "green" }} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;