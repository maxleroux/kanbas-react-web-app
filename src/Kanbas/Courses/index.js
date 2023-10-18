import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaGripLines } from "react-icons/fa";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div style={{width: "100%"}}>
      <div className="row breadcrumb">
        <h1><FaGripLines /> {course.number} {">"}</h1>
      </div>
      <div className="row" style={{ width: "100%", padding: 0}}>
        <div className="col-2" >
          <CourseNavigation />
        </div>
        <div className="col" style={{ width: "100%", padding: 0}}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId"
                element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;