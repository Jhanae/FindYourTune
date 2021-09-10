import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Login from './Login'
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/" component={() => <Login />} />
          {/* <Route exact path="/shop" component={() => <ProductContainer products={products} setProductID={setProductID} productID={productID} setprofileID={setProfileID} profileID={profileID}/>} />
          <Route exact path="/cart" component={() => <Cart profileID={profileID} />} />
          <Route exact path="/log-in" component={() => <LogIn isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} setProfileID={setProfileID} profileID={profileID}/>} />
          <Route exact path="/profile" component={() => <Profile isLoggedIn={isLoggedIn} profileID={profileID}/>} />
          <Route exact path="/update-profile" component={() => <EditProfile profileID={profileID} isLoggedIn={isLoggedIn}/>} /> */}
         </Switch>
      </Router>
      </div>
  );
}

export default App;
