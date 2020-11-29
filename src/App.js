import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shopPage/Shop";
import Header from "./components/header/Header";
import SignInPage from "./pages/signIn-signUp/signIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
