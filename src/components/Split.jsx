import React from "react";
import bottle from "../assets/bottle.png";
import logo from "../assets/newlogotransparent.png";
import fbicon from "../assets/3dfb.png";
import insticon from "../assets/instagram4.png";
import emailicon from "../assets/email.png"
import phoneicon from "../assets/telephone.png"

function Split() {
  return (
    <section className="h-screen w-screen flex scroll-smooth">
      <div className="w-1/2 h-full overflow-y-auto p-4 bg-[url(./assets/bg-slate.png)] bg-center bg-cover bg-no-repeat no-scrollbar">
        {/* Left Section Content */}

        <div className="min-h-screen  flex flex-col items-center justify-center text-center font-sigmar">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-shadow">Gordo Mikes</h2>

          <img
            className="h-[300px] lg:h-[600px] md:h-[500px] img-shadow-2"
            src={bottle}
            alt=""
          />
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 text-shadow">BBQ Sauce</h2>
        </div>
        <div>
          <div className="min-h-screen  flex items-center justify-center ">
            <div className="relative z-10 space-y-4 mt-20 mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-300 font-sigmar text-shadow">
                The Sauce <br />
                is <br />
                The Boss
              </h1>
              <h1 className="text-sm md:text-lg lg:text-xl  leading-loose text-center font-bold text-gray-300 text-shadow">
                Tomato Sauce-Brown Sugar-Vinegar-Guava-Water-Worcestershire
                Sauce-Olive Oil-Ketchup-Salt-Pepper-Garlic-Mustard Powder-Onion
                Powder-Cayenne Pepper
              </h1>
            </div>
          </div>
        </div>
        <section className="min-h-screen  flex flex-col items-center justify-around m-10">
        <div className="mb-20">
            <a
              href="tel:555-555-5555"
              target="_blank"
            >
              <img src={phoneicon} alt="" className="min-w-[160px] md:max-w-[280px] lg:min-w-[380px] img-shadow-2" />
            </a>
          </div>
          
          <div>
            <a href="mailto:test@example.com" target="_blank">
              <img src={emailicon} alt="" className="min-w-[160px] md:max-w-[280px] lg:min-w-[380px] img-shadow-2 " />
            </a>
          </div>
          </section>
      </div>

      

      <div className="w-1/2 h-screen overflow-y-auto p-4  no-scrollbar bg-primary">
        {/* Right Section Content */}

        <div className="text-shadow-2 min-h-screen text-center flex flex-col items-center justify-center font-bold font-sigmar text-black text-2xl md:text-3xl lg:text-4xl">
          <h2>Gordo <br />Mikes</h2>
          <img className="w-auto md:h-[400px] lg:h-[500px] img-shadow-2 m-2" src={logo} alt="" />
          <h2>Low and Slow</h2>
        </div>

        <section className="min-h-screen  flex flex-col items-center justify-around m-10">
          <div>
            <a
              href="https://www.facebook.com/groups/414186977978889"
              target="_blank"
            >
              <img src={fbicon} alt="" className="min-w-[160px] md:max-w-[280px] lg:min-w-[380px] img-shadow-2" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/gordomikesbbq/" target="_blank">
              <img src={insticon} alt="" className="min-w-[160px] md:max-w-[280px] lg:min-w-[380px] img-shadow-2" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Split;
