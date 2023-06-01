import React from "react";


import Navbars from "../Navbar/Navbar";
import Headers from "../Header/Header";
import ListProductHere from "../listProduct/listProduct";
import Maplocation from "../Maplocation/Maplocation";
import ContactUs from "../contact/From/From";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <><Navbars/><Headers /><ListProductHere /><Maplocation /><ContactUs /><Footer /></>
            
  );
};

export default Home;