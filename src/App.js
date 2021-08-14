import "./App.css";
// import "~slick-carousyael/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
