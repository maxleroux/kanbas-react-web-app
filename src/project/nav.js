import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="list-group">
      <Link
        to="/Kanbas"
        className="list-group-item list-group-item-action"
        style={{margin: 0, padding: 5}}
      >
        Home
      </Link>  
      <Link
        to="/project/napster-search"
        className="list-group-item list-group-item-action"
        style={{margin: 0, padding: 5}}
      >
        Search
      </Link>
      <Link
        to="/project/signin"
        className="list-group-item list-group-item-action"
        style={{margin: 0, padding: 5}}
      >
        SignIn
      </Link>
      <Link
        to="/project/users"
        className="list-group-item list-group-item-action"
        style={{margin: 0, padding: 5}}
      >
        Users
      </Link>
      <Link
        to="/project/account"
        className="list-group-item list-group-item-action"
        style={{margin: 0, padding: 5}}
      >
        Account
      </Link>
    </div>
  );
}

export default Nav;