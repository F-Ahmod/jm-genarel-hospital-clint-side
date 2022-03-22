import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/ContextApi/AuthProvider';
import SingUp from './Components/SingUp/SingUp';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import FindDoctor from './Components/FindDoctor/FindDoctor';
import Login from './Components/Login/Login';
import Covid from './Components/Covid/Covid';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Service from './Components/Service/Service';
import SeeDetails from './Components/SeeDetails/SeeDetails';
import AboutUs from './Components/AboutUs/About';
import VisitorPolicy from './Components/VisitorPolicy/VisitorPolicy';
import Home from './Components/Home/Home';
import HedBanner from './Components/HedBanner/HedBanner';




function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <HedBanner></HedBanner>
        <Switch>
          <Route exact path="/">
          <Service></Service>
            <FindDoctor></FindDoctor>
            <Covid></Covid>
            <AboutUs></AboutUs>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Service></Service>
            <FindDoctor></FindDoctor>
            <Covid></Covid>
            <AboutUs></AboutUs>

            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/seedetails/:serviceid">
            <SeeDetails></SeeDetails>
          </Route>

          <Route path="/doctordetails/:doctorid">
            <DoctorDetails></DoctorDetails>
          </Route>

          <Route path="/covid">
            <Covid></Covid>
          </Route>

          <Route path="/finddoctor">
            <FindDoctor></FindDoctor>
          </Route>

          <Route path="/visitorPolicy">
            <VisitorPolicy></VisitorPolicy>
          </Route>


          <Route exact path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/singup">
            <SingUp></SingUp>
          </Route>
          {/* <Route path="*">
      <NotFound></NotFound>
      </Route> */}

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>



  );
}

export default App;