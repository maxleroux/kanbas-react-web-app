import { Link } from "react-router-dom";
import { React, useState } from "react";
import '../../Kanbas.css'
import db from "../Database";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <hr></hr>
      <div className="row" style={{ paddingLeft: "30" }}>
        <div className="col">
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        </div>
        <div className="col">
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        </div>
        <div className="col">
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        </div>
        <div className="col">
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        </div>
        <div className="col float-end">
          <button onClick={addNewCourse}  className="btn btn-primary" style={{width: 50, padding: 4}}>
            Add
          </button>
          &nbsp;
          <button onClick={updateCourse} className="btn btn-success" style={{padding: 4}}>
            Update
          </button>
        </div>
      </div>
      <div className="list-group d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <img className="redPic" src={course.image} width="100%" />
            <h3></h3>
            <div className="dashboard-text">
              <div className="row" style={{ width: "490" }}>
                <div className="col">
                  <h4>{course.name}</h4>
                </div>
                <div className="col float-end">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }} className="btn btn-success" style={{width: 50, padding: 4}}>
                    Edit
                  </button>
                  &nbsp;
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger" style={{width: 60, padding: 4}}>
                    Delete
                  </button>
                </div>
              </div>
              {course.number} <br />
              {course.startDate} <br />
              {course.endDate}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;