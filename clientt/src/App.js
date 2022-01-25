import { Routes, Route } from "react-router-dom";

import Signup from "./Components/Singup/Signup";
import Dashbord from "./Dashbord/Dashbord";
import Header from "./Header";
import Home from "./Home";

import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Shop from "./Shop"

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Dashbord/Shop" element={<Shop />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/Dashbord" element={<Dashbord />}/>
        <Route path="/Aboutus" element={<Aboutus />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
