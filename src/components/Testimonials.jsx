import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="w-full flex justify-between items-center flex-col mb-6 sm:mb-16 md:flex-row z-[1]">
        <h2 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <h2 className={`${styles.paragraph}  text-left max-w-[470px]`}>
            Everything you need to accept card payments{" "}
            <br className="hidden sm:block" /> and grow your business anywhere
            on the planet.
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container sm:justify-start relative z[1]">
        {feedback.map((item) => {
          return <FeedBackCard key={item.id} feedback={item} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
