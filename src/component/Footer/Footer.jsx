import React from "react";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className='bg-dark text-center text-white  ' >
        <div className='container p-4 pb-0 py-2'>
          <section className='mb-0'>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://instagram.com/allforyougift?igshid=YmMyMTA2M2Y="
              role="button"
            ><div><GrInstagram />@Allforyougift</div></a>
          </section>
        </div>
        <div className="text-center  p-0 small" >
                    © 2021 Copyright {" "}
          <a className="text-white" href="https://www.linkedin.com/in/merve-karabulut">Allforyougift</a>
        </div>

      </footer>
    </>
  );
};

export default Footer;


