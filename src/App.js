import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import AddPlace from "./Components/AddPlace/AddPlace";
import Order from "./Components/Order/Order";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Footer from "./Components/Footer/Footer";
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageOrders from "./Components/ManageOrders/ManageOrders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/add/place">
              <AddPlace></AddPlace>
            </PrivetRoute>
            <PrivetRoute exact path="/order/place/tour/:id">
              <Order></Order>
            </PrivetRoute>
            <PrivetRoute path="/my/orders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/admin/manage/order">
              <ManageOrders></ManageOrders>
            </PrivetRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
