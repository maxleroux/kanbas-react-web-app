import { Link, useParams, useLocation } from "react-router-dom";
import '../../Kanbas.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", 
  "Panopto Video", "Discussion", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", 
  "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
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
  );
}


export default CourseNavigation;