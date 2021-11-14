import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import About from './Pages/About/About';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Appartments from './Pages/Appartments/Appartments';
import Purchase from './Pages/Appartments/Purchase/Purchase';
import useFirebase from './Pages/Hooks/useFirebase';

function App() {
  const {admin} = useFirebase()
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        
        <PrivateRoute path = '/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>

        <PrivateRoute path = '/purchase/:id'>
          <Purchase></Purchase>
        </PrivateRoute>
       
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <Route path = '/register'>
          <Register></Register>
        </Route>
        <Route path = '/appartments'>
          <Appartments></Appartments>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
