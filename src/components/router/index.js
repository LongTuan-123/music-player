import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HOME } from "../../config/path";
import Home from "../home";
import Header from "../layout/Header";
// import { isLogin } from "../config/function";

const AppRouter = () => {
  return (
    // <Router>
      
    //   <Switch>  <Route path={HOME} exact></Route></Switch>
    
    // </Router>
    <div>
      {/* <Header></Header> */}
      <Home></Home>
    </div>
  );
};
export default AppRouter;
