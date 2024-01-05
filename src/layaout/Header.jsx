import { Link } from "react-router-dom";

function Header() {

    // I gotta change this for statics categories. 
    const navRoutes = 
    [
        {name: 'Products', path: "/products"}
    ];
    
    return(
        <div>
            <ul>
               {
                navRoutes.map(route => (
                    <li key={route.name}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))
               } 
            </ul>
        </div>

    )
};

export default Header