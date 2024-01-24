import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div role="main">
        <Navbar />
        <div className="w-full h-auto">
            <Outlet />    
        </div>
        <Footer />   
    </div>
  )
}

export default Template;