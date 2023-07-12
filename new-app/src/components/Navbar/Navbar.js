import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
        <Link to='/' className="home">Home</Link>
    </div>
  );
}
export default Navbar;

