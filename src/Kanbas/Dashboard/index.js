import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <hr></hr>
      <div className="list-group d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <img className="redPic" src={course.image} width="100%" />
            <h3></h3>
            <div className="dashboard-text">
              <h4>{course.name}</h4>
              {course.number} <br />
              {course.startDate} <br />
              {course.endDate}
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="float-end" >
        <ul class="todo-list-group" style={{ padding: 10 + "px" }}>
          <li class="list-group-item">
            <h5>To Do</h5>
            <hr />
          </li>
          <li class="list-group-item">
            Grade A1 - ENV + HTML
          </li>
        </ul>
        <br />
        <ul class="todo-list-group" style={{ padding: 10 + "px" }}>
          <li class="list-group-item">
            <h5>Coming Up</h5>
            <hr />
          </li>
        </ul>
      </div> */}
    </div>
  );
}
export default Dashboard;