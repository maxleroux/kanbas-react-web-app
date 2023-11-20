import db from "../../../Kanbas/Database";
import { Link, useParams, useLocation } from "react-router-dom";
import '../../../Kanbas.css'
import { FaGripLines } from "react-icons/fa";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People",
    "Panopto Video", "Discussion", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  // const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="row breadcrumb">
        {/* <h1><FaGripLines /> {course.number} {">"} {pathname.slice(pathname.lastIndexOf("/"), pathname.length).substring(1)} </h1> */}
      </div>
      <div className="list-group-flush cn-list-group" style={{ width: "100%" }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default CourseNavigation;