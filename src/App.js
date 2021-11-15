import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AllDrones from './Pages/AllDrones/AllDrones';
import SingleService from './Pages/SingleService/SingleService';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

// green: #00cf5d
// body: #111A28
//title: #013650

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route  path='/all-drones'>
                <AllDrones></AllDrones>
              </Route>
              <Route path="/allProducts/:id">
                <SingleService></SingleService>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer/>
        </Router> 
      </AuthProvider>  
    </div>
  );
}

export default App;
