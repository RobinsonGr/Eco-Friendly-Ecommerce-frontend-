import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import {getCategories} from '../api'
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
    const [categories, setCategories] = useState([])


    const [anchorEl, setAnchorEl] = useState(null); //This state is to control the opening and closing of the slide-out nav, 
    const isOpen = Boolean(anchorEl); //This goes into the property open, works as a switch

    const handleOpenMenu = (event) => {   //CurrentTarget takes the actual element where the listeneer is attached (the button)
        setAnchorEl(event.currentTarget);  //its for indicate to Nav where to anchor the slide-out nav drawer
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }


    //Retrieve the current categories from the Db, using the api function getCategories
    useEffect(() => {
        const fetchData = async() => {
            const categories = await getCategories()
            setCategories(categories);
        }
        fetchData() //fetching data
    }, []);
    
    return(
        <AppBar position="static"> 
            <Toolbar>  {/*Toolbar groups elements within the navegation bar*/ }
                <IconButton onClick={handleOpenMenu}>
                    <MenuIcon/>
                </IconButton>
                
                <Menu
                    anchorEl={anchorEl}
                    open={isOpen}
                    onClose={handleCloseMenu}
                > 
                    {
                    categories.map(route => (
                        //it's important to close the menu with handleCloseMenu when the category is selected.
                        <MenuItem onClick={handleCloseMenu} key={route.name}>
                            {/*Using regex to convert string with spaces into string with hypes to match the url pattern */}
                            <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>{route.name}</Link>
                        </MenuItem>
                    ))
                    } 
                </Menu>           
            </Toolbar>
        </AppBar>
    );
};

export default Header;