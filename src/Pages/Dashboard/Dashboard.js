import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import Home from '../Home/Home/Home';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AdminRoute from '../AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
  const {user} = useAuth()
  const history = useHistory()
  const location = useLocation()
  const {logOut, admin} = useFirebase()

  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const drawer = (
    <div>

      <Toolbar />
      <Divider />

     
      <List>

    <Link to = '/' style = {{ textDecoration:'none' }}><Button 
     style = {{fontSize: '16px'}}  >Home</Button></Link>
    <br/>
      {
        !admin && 
        <Box>
        <Link to = {`${url}/myorders`} style = {{textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >Your Orders</Button></Link>
      <br/> 
      <Link to = {`${url}/payment`} style = {{textDecoration:'none'}}><Button  style = {{fontSize: '16px'}}  >Payment</Button></Link>
      <br />
      <Link to = {`${url}/review`} style = {{ textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >Review</Button></Link>
      </Box>
      }
    
    {admin && 
    <Box>
      <Link to = {`${url}/addProduct`} style = {{ textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >Add Product</Button></Link><br />
      <Link to = {`${url}/manageProducts`} style = {{ textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >Manage Product</Button></Link>
    <br />
    <Link to = {`${url}/manageAllOrder`} style = {{ textDecoration:'none'}}><Button  style = {{fontSize: '16px'}}  >Manage All Order</Button></Link>
    <br /> <Link to = {`${url}/makeAdmin`} style = {{textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >Create Admin</Button></Link>
    </Box>
    
    }
    <Link to = {`${url}`}  onClick = {logOut} style = {{textDecoration:'none'}}><Button style = {{fontSize: '16px'}}  >log out</Button></Link>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      
      
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        
        <Route exact path={path}>
        <h1>Welcome to your dashboard</h1>
        </Route>
        
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/manageAllOrder`}>
          <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
