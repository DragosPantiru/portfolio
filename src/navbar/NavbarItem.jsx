import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavbarItem({ name, id, adress }) {
    return (

        <li className="menuItems"><Link to={adress}>{name}</Link></li>



    );
}