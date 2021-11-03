// import logo from './logo.svg';
import './App.css';
import ExpensesTab from './component/ExpensesTab';
import FriendsTab from './component/FriendsTab';
// import Card from './component/Card';
import HomeTab from './component/HomeTab';
import NavBar from './component/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/expense">
            <ExpensesTab />
          </Route>
          <Route path="/friends">
            <FriendsTab />
          </Route>
          <Route path="/">
            <HomeTab />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
