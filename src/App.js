import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// Main Components
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeServed from "./pages/WhoWeServed";
import WhereWeServed from "./pages/WhereWeServed";
import Error from "./pages/Error";
//Pages
import DrywallService from "./pages/DrywallService";
import DoorAndTrimWorks from "./pages/DoorAndTrimWorks";
import FloorInstallation from "./pages/FloorInstallation";
import Tiling from "./pages/Tiling";
import Painting from "./pages/Painting";
import BasementFinishing from "./pages/BasementFinishing";
import Demolition from "./pages/Demolition";
import BathroomFinishing from "./pages/BathroomFinishing";
import EmergencyResponse from "./pages/EmergencyResponse";
import WaterFlood from "./pages/WaterFlood";
import BiohazardRedemption from "./pages/BiohazardRedemption";
import FireAndSmoke from "./pages/FireAndSmoke";

function App() {

  return (
    <BrowserRouter>
      {/* <ScrollToTop> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/404" component={Error} exact />
          <Route path="/about" component={About} exact />
          <Route path="/who-we-serve" component={WhoWeServed} exact></Route>
          <Route path="/where-we-serve" component={WhereWeServed} exact></Route>
          <Route path="/drywall-service" component={DrywallService} exact></Route>
          <Route
            path="/door-and-trimworks"
            component={DoorAndTrimWorks} exact
          ></Route>
          <Route
            path="/floor-installation"
            component={FloorInstallation} exact
          ></Route>
          <Route path="/tiling" component={Tiling} exact></Route>
          <Route path="/painting" component={Painting} exact></Route>
          <Route
            path="/basement-finishing"
            component={BasementFinishing} exact
          ></Route>
          <Route path="/demolition" component={Demolition} exact></Route>
          <Route
            path="/bathroom-finishing"
            component={BathroomFinishing} exact
          ></Route>
          <Route
            path="/emergency-response"
            component={EmergencyResponse} exact
          ></Route>
          <Route path="/water-and-flood" component={WaterFlood} exact></Route>
          <Route
            path="/biohazard-redemption"
            component={BiohazardRedemption} exact
          ></Route>
          <Route path="/fire-and-smoke" component={FireAndSmoke} exact></Route>
          <Route render={routerProps => <Redirect to='/404' {...routerProps} />} />
        </Switch>
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
}

export default App;
