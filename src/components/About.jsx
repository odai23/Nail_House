import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about_container">
      <img
        className="about_back_img"
        src="/images/Nail_House_logo_gold_2.svg"
      />

      <div className="about_text">
        <h3>O NÁS</h3>
        <h1>Nail House</h1>
        <p className="about_questions">Proč zvolit právě náš salon?</p>
        <p>
          Všechny nástroje jsou podrobeny 3-stupňovému systému sterilizace,
          protože se staráme o vaše zdraví
        </p>
        <p className="about_questions">Výhodné umístěni salonu:</p>
        <p>
          kousek od metra B Anděl, metra A Náměstí Míru a metra C Pražského
          povstání. Jsme připraveni Vás obsloužit i mimo pracovní dobu! Stačí
          zavolat nebo napsat zprávu. Nabízíme kvalitní manikuru odpovídající
          všem modním trendům za přijatelnou cenu.
        </p>
        <p className="about_questions">Kvalitní služby</p>
        <p>
          čaj, káva, bonbony a šampaňské pro vás. Věrnostní karta pro stále
          zákazníci, která dává slevu na manikúru až 100%!
        </p>
      </div>
    </div>
  );
};

export default About;
