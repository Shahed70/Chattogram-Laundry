import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddAdmin from "./components/Deshboard/AddAdmin";
import AddService from "./components/Deshboard/AddService";
//import Deshboar from "./components/Deshboard/Deshboar";
import ManageService from "./components/Deshboard/ManageService";
import Home from "./components/home/home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import ShareDashBoard from "./components/ShareDashBoard/ShareDashBoard";
import BookedItems from "./components/UserDeshboard/BookedItems/BookedItems";
import CustomerReview from "./components/UserDeshboard/Reviews/CustomerReview";
import UserDeshboard from "./components/UserDeshboard/UserDeshboard";

export const CreactUserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
      <CreactUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/sharedashboard">
              <ShareDashBoard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/service">
              <AddService />
            </Route>
            <Route path="/addAdmin">
              <AddAdmin />
            </Route>
            <Route path="/manageService">
              <ManageService />
            </Route>

            <PrivateRoute path="/userdeshboard/:id">
              <UserDeshboard />
            </PrivateRoute>
            <Route path="/userdeshboard">
              <UserDeshboard />
            </Route>
            <Route path="/book">
              <BookedItems />
            </Route>
            <Route path="/reviews">
              <CustomerReview />
            </Route>
          </Switch>
        </Router>
      </CreactUserContext.Provider>
    </>
  );
}

export default App;
