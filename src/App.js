import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhoWeServed from "./pages/WhoWeServed";
import WhereWeServed from "./pages/WhereWeServed";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/who-we-serve' component={WhoWeServed}></Route>
      <Route path='/where-we-serve' component={ WhereWeServed}></Route>
      </Switch>
      <div>
      <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
