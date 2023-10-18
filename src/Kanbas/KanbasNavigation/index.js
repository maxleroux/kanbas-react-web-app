import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaEnvelopeOpenText, FaClock, FaFilm, FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
import '../../Kanbas.css'
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<FaUserCircle/>, <FaTachometerAlt />, <FaBook />, <FaCalendar />,
  <FaEnvelopeOpenText />, <FaClock />, <FaFilm />, <FaArrowCircleRight />, <FaQuestionCircle />]
  const { pathname } = useLocation();
  return (
    <div className="kn-list-group" style={{ width: 83 }}>
      <img className="nLogo" src="../../nLogo.png" width="83px" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} ${link === "Account" ? (pathname.includes("Account") && "active" ? "account-icon-active" : "account-icon") : ""}`}>
          {icons[index]} <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;