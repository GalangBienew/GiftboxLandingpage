/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
// import Header from "./component/Header/Header";
// import ListProductHere from "./component/listProduct/listProduct";
// import Maplocation from "./component/Maplocation/Maplocation";
// import Navbar from "./component/Navbar/Navbar";
// import ContactUs from "./From/From";
// import Footer from "./component/Footer/Footer";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Home from "./component/Pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateReminder from "../src/component/Pages/CreateReminder";
import Notpage from "./component/pagenotFound/Nopage";
import TestPages from "./component/Pages/test";

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <>
      <div className="App">
        {
          isLoading ? (
            // membuat div agar react spiners bisa berada di tengah layar
            <div className='Loading'>
              <PacmanLoader color={"rgba(122, 17, 124, 1)"} loading={isLoading} size={60} />
            </div>
          ) : (
            <div>              
              <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/reminder" element={< CreateReminder />} />
                <Route path="/Test" element={< TestPages />} />
                <Route path="*" element={< Notpage />} />
              </Routes>            
            </div>
          )
          
        }
      </div>
    </>
  );
}

export default App;
