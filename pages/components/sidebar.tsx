import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export function Sidebar(){

    const [width, setWidth] = useState(40);
    const [isOpend, setIsOpen] = useState(false);
    

    const handleClick = ()=>{
        isOpend?setWidth(40):setWidth(250)
        setIsOpen(!isOpend);
    }

	return (
		<div className='sidebar' style={{width:width}}>
			<IconButton aria-label="delete" style={{right: '0', position: 'absolute'}} onClick={handleClick}>
				<MenuIcon />
			</IconButton>
		</div>

	)
}
export default Sidebar;
