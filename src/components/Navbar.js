import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/projects">Projects</NavLink> | 
            <NavLink to="/projects/create">New Project</NavLink>
        </nav>
    );
}


export default Navbar;