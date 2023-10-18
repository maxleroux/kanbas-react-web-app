import ModuleList from "../Modules/ModuleList";
import { FaCheckCircle, FaFileImport, FaBullseye, FaBell, FaChartBar, FaBullhorn } from "react-icons/fa";

function Home() {
  const icons = [<FaCheckCircle />, <FaFileImport />, <FaBullseye />, <FaBell />, <FaChartBar />]
  return (
    <div className="row" >
      <div className="col" style={{ width: "900px" }}>
        <hr />
        <div style={{paddingBottom: "10px"}}>
          <form action="index.html" style={{display: "inline"}}>
            <button type="button" class="btn btn-outline-secondary">Collapse All</button>
            <button type="button" class="btn btn-outline-secondary"><FaCheckCircle /> &nbsp;View Progress</button>
            <select class="form-select" style={{display: "inline", width: "200px", margin: 5}}>
              <option>Publish All</option>
              <option>Publish All modules and items</option>
              <option>Publish modules only</option>
              <option>UnPublish All</option>
            </select>
            <button type="button" class="btn btn-outline-danger">Module</button>
          </form>
        </div>
        <ModuleList />
      </div>
      <div className="float-end" style={{ width: "250px"}}>
        <h3>Course Status</h3>
        <button type="button" class="btn btn-outline-secondary" style={{ width: 100 + "px", marginRight: 10 }}>Unpublish</button>
        <button type="button" class="btn btn-success" style={{ width: 110 + "px" }}>
          <FaCheckCircle style={{ color: "white" }} /> &nbsp;Publish</button>
        <br />
        <br />

        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaFileImport style={{ color: "grey" }} /> &nbsp;Import Existing Content
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaFileImport style={{ color: "grey" }} /> &nbsp;Import From Commons
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaBullseye style={{ color: "grey" }} /> &nbsp;Choose Home Page
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaChartBar style={{ color: "grey" }} /> &nbsp;View Course Stream
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaBullhorn style={{ color: "grey" }} /> &nbsp;New Announcement
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaChartBar style={{ color: "grey" }} /> &nbsp;New Analytics
          </p>
        </button> <br />
        <button type="button" class="btn btn-outline-secondary wd-home-status-button">
          <p style={{ textAlign: "left", margin: 0 + "px", width: 205 + "px" }}>
            <FaBell style={{ color: "grey" }} /> View Course Notifications
          </p>
        </button>
        <br />
        <br />
        <ul class="todo-list-group" style={{ padding: 10 + "px" }}>
          <li class="list-group-item">
            <h5>To Do</h5>
            <hr/>
          </li>
          <li class="list-group-item">
            Grade A1 - ENV + HTML
          </li>
        </ul>
        <br />
        <ul class="todo-list-group" style={{ padding: 10 + "px" }}>
          <li class="list-group-item">
            <h5>Coming Up</h5>
            <hr/>
          </li>
        </ul>
        <div />
      </div>
    </div>
  );
}
export default Home;