import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/CreateInvoice">Create Invoice</NavLink>
        </nav>
    )
}

export default Navbar;