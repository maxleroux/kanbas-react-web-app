import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div style={{ padding: "20px" }}>
            <div className="row" style={{ paddingLeft: "10px", width: "100%" }}>
                <select className="col form-select">
                    <option>Gradebook</option>
                </select>
                <div className="col float-end">
                    <form action="index.html" style={{ display: "inline" }}>
                        <button class="btn btn-outline-secondary dropdown-toggle float-end" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <FaFileExport />Export
                        </button>
                        <button type="button" class="btn btn-outline-secondary float-end"
                            style={{ marginRight: "10px" }}><FaFileImport /> Import</button>
                    </form>
                </div>
            </div>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-5" style={{ padding: "0" }}>
                        <h5>Student Names</h5>
                        <input class="form-control" type="text" placeholder="Search Students"
                            id="text-fields-search-students" style={{ width: "300px" }} />
                    </div>
                    <div class="col-5" style={{ paddingRight: "20" }}>
                        <h5>Assignment Names</h5>
                        <input class="form-control" type="text" placeholder="Search Assignments"
                            id="text-fields-search-assignments" style={{ width: "300px" }} />
                    </div>
                </div>
            </div>
            <br />
            <button type="button" class="btn btn-outline-secondary">Apply Filters</button>
            <br /> <br />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead style={{ fontSize: "20px" }}>
                        <th><h5>Student Name</h5></th>
                        {assignments.map((assignment) => (<th><h5>{assignment.title}</h5></th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}

                    </tbody></table>
            </div></div>);
}
export default Grades;

