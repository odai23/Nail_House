import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
// import About from "./components/About";
import Services from "./components/Services";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "./App.css";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <ImageSlider slides={SliderData} />
      <div className="service_wrapper">
        <h1 className="title_služby">Služby a Ceny</h1>
        <div className="services">
          <Services
            title="MANIKÚRA"
            text1="Kombinovaná Manikúra"
            price1="450"
            text2="Nehtové zpevnění"
            price2="100"
            text3="Panská manikúra"
            price3="550"
            text4="Odlakování gel laku"
            price4="50"
            text5="Odlakování gel laku bez následující manikúry"
            price5="200"
            text6="Odlakování gelu/akrylu bez následující manikúry"
            price6="200"
            text7="Klasický lak"
            price7="100"
          />
          <Services
            title="DESIGN NEHTŮ"
            text1="Jednoduchý design- 1 nehet"
            price1="25"
            text2="Složitý design- 1 nehet"
            price2="50"
            text3="Kočičí oko (všechny nehty)"
            price3="50"
            text4="Francouzská manikúra (všechny nehty)"
            price4="150"
          />
          <Services
            title="PEDIKÚRA"
            text1="Pedikúra (kombinovaná)"
            price1="650"
            text2="Pedikúra (jenom prsty) + gel-lak"
            price2="650"
            text3="Pedikúra (kombinovaná) + gel-lak"
            price3="850"
            text4="Panská pedikúra"
            price4="750"
          />
          <Services
            title="MANIKÚRA+GEL-LAK"
            text1="Manikúra+lakování gel-lakem"
            price1="700"
            text2="Manikúra+lakování gel-lakem+odlakování"
            price2="750"
          />
          <Services
            title="MODELÁŽ NEHTU"
            text1="Nové gelové nehty (délka 1-2)"
            price1="995"
            text2="Nové gelové nehty (délka 3-5)"
            price2="1100"
            text3="Doplnění modeláže"
            price3="0"
            text4="nehtů včetně potažení barvou"
            price4="900"
          />
          <Services
            title="MANIKÚRA+GEL-LAK"
            text1="Manikúra+lakování gel-lakem"
            price1="700"
            text2="Manikúra+lakování gel-lakem+odlakování"
            price2="750"
          />
        </div>
      </div>
      {/* <About /> */}
      <Maps />
      <Footer />
    </>
  );
}

export default App;
