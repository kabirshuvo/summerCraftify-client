import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Header/Navbar";

function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

 
    </>
  );
}

export default App;
