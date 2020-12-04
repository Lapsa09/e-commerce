import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shopPage/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/signIn-signUp/signIn";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

function App({ currentUser, setCurrentUser }) {
  var unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
