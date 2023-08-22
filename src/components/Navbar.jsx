import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import Badge from '@mui/material/Badge';
import React, { useState } from 'react';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent:"space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",

}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"20px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"1 0px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }

}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
       <Typography variant='h6' sx={{ display: { xs: "none", sm: "block"}}}>Navbar</Typography> 
       <Pets sx={{ display: { xs: "block", sm: "none"}}} />
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
  <Mail />
</Badge>

          <Badge badgeContent={4} color="error">
      <Notifications />
    </Badge>
    <Avatar sx={{width:30, height:30}}
     src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
     onClick={(e) => setOpen(true)} />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
        <Avatar sx={{width:30, height:30}}
     src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' />
     <Typography variant='span' sx={{ paddingLeft:1}}>Roland</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      
    </AppBar>
  )
}

export default Navbar