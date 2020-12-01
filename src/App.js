import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shopPage/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/signIn-signUp/signIn";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import React, { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
