import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';

import {
  Switch,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import './Dashboard.css'


const drawerWidth = 300;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logOut} = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {admin && <Box>
      <Link className="dasboard-nav-item" to={`${url}/manageOrders`}><Button color="inherit">Manage all Orders</Button></Link>
      <br/>
      <Link className="dasboard-nav-item" to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
      <br/>
      <Link className="dasboard-nav-item" to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
      <br/>
      <Link className="dasboard-nav-item" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      </Box>
        }

      {!admin && <Box>
        <Link className="dasboard-nav-item" to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
        <br/>
        
        <Link className="dasboard-nav-item" to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>
        <br/>
        <Link className="dasboard-nav-item" to={`${url}/pay`}><Button color="inherit">Pay Now</Button></Link>
        
      </Box>
        }
      <Link style={{textDecoration:"none", marginBottom:"10px", display:"inline-block"}} to='/'><Button className="my-btn" color="inherit">Back To Home</Button></Link>
      <Button style={{width:"57%"}} onClick={logOut} variant="contained" color="primary">Logout</Button>
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          <PrivateRoute exact path={path}>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
          <PrivateRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path={`${path}/addReview`}>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path={`${path}/pay`}>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
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
