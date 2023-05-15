import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import ApprovedList from "./pages/approvedList/ApprovedList";
import InputManual from "./pages/inputManual/InputManual";
import RekapLaporan from "./pages/rekapLaporan/RekapLaporan";
import Edit from "./pages/edit/Edit";
import EditList from "./pages/editList/EditList";
import Timbang from "./pages/timbang/Timbang";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/approved">
            <ApprovedList />
          </Route>
          <Route path="/edit">
            <EditList />
          </Route>
          <Route path="/edit/:userId">
            <Edit />
          </Route>
          <Route exact path="/rekapLaporan">
            <RekapLaporan />
          </Route>
          <Route exact path="/inputManual">
            <InputManual />
          </Route>
          <Route exact path="/timbang">
            <Timbang />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
