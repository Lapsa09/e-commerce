import "./App.css";
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Shop";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
