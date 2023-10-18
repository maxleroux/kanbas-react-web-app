import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ width: "95%" }}>
      <p className="float-end" style={{ color: "green" }}><FaCheckCircle /> Published</p>
      <br />
      <hr />
      <h4>Assignment Name</h4>
      <input value={assignment.title}
        className="form-control mb-2" />
      <hr />
      <button onClick={handleSave} className="btn btn-danger me-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-outline-secondary float-end" style={{ marginRight: 10 }}>
        Cancel
      </Link>
      <br /> <br />
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
          style={{ height: "100px" }}></textarea>
        <label for="floatingTextarea2"></label>
      </div>
      <br /> <br />
      <div class="row" style={{ paddingLeft: "40px" }}>
        <div class="col-2">Points: </div>
        <div class="col"><input class="form-control" type="number" placeholder="100"
          id="text-fields-search-students" />
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: "40px" }}>
        <div class="col-2">Assignment Group: </div>
        <div class="col">
          <select class="form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: "40px" }}>
        <div class="col-2">Display Grade As: </div>
        <div class="col">
          <select class="form-select">
            <option>PERCENTAGE</option>
          </select>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: "220px" }}>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="r6" />
          <label class="form-check-label" for="r6">
            Do not count this assignment towards the final grade</label>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: "40px" }}>
        <div class="col-2">Submission Type: </div>
        <div class="col">
          <select class="form-select">
            <option>ONLINE</option>
          </select>
          <br />
          Online Entry Options: <br />
          <div class="form-check">
            <input class="form-check-input" checked type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> Text Entry</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" checked type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> Website URL</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" checked type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> Media Recordings</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> Student Annotations</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> File Upload</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="r6" />
            <label class="form-check-label" for="r6"> Text Entry</label>
          </div>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: "40px" }}>
        <div class="col-2">Assign: </div>
        <div class="col">
          Assign to: <br />
          <input class="form-control" type="text" placeholder="EVERYONE"
            id="text-fields-search-students" /><br />
          Due: <br />
          <input class="form-control" type="date" id="text-fields-dob" value="2000-01-21" /><br />
          <div class="row">
            <div class="col-4">
              Available From:
              <input class="form-control" type="date" id="text-fields-dob" value="2000-01-21" /><br />
            </div>
            <div class="col-4">
              Until:
              <input class="form-control" type="date" id="text-fields-dob" value="2000-01-21" /><br />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="form-check" style={{ paddingBottom: "20px" }}>
        <input class="form-check-input" type="checkbox" id="r6" />
        <label class="form-check-label" for="r6"> Notify users that this content has changed</label>
        <div class="float-end">
          <button onClick={handleSave} className="btn btn-danger me-2 float-end">
            Save
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-secondary float-end" style={{ marginRight: 10 }}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;