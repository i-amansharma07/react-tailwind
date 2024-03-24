import React from "react";
import styles from "./style";
import {
  NavBar,
  HeroSection,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`navbar ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`hero bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>
      <div className={`body ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients />
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
