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
          <Route path="/who-we-serve" component={WhoWeServed}></Route>
          <Route path="/where-we-serve" component={WhereWeServed}></Route>
          <Route path="/drywall-service" component={DrywallService}></Route>
          <Route
            path="/door-and-trimworks"
            component={DoorAndTrimWorks}
          ></Route>
          <Route
            path="/floor-installation"
            component={FloorInstallation}
          ></Route>
          <Route path="/tiling" component={Tiling}></Route>
          <Route path="/painting" component={Painting}></Route>
          <Route
            path="/basement-finishing"
            component={BasementFinishing}
          ></Route>
          <Route path="/demolition" component={Demolition}></Route>
          <Route
            path="/bathroom-finishing"
            component={BathroomFinishing}
          ></Route>
          <Route
            path="/emergency-response"
            component={EmergencyResponse}
          ></Route>
          <Route path="/water-and-flood" component={WaterFlood}></Route>
          <Route
            path="/biohazard-redemption"
            component={BiohazardRedemption}
          ></Route>
          <Route path="/fire-and-smoke" component={FireAndSmoke}></Route>
          <Route render={routerProps => <Redirect to='/404' {...routerProps} />} />
        </Switch>
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
}

export default App;
