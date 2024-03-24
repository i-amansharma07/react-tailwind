import React from "react";
import { features } from "../constants";
import style, { layout } from "../style";
import styles from "../style";
import Button from './Button'

const Feature = ({index,feature}) => {
  const {icon, title, content} = feature
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 && 'mb-6'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-dimBlue`}>
        <img className="w-[50%] h-[50%] object-contain"  src={icon} alt="icon"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <div id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="hidden sm:block" /> we'll handle the money
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          With the rught Credit Card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundereds
          of credits cards on the market.
        </p>
        <Button styles='mt-10'>Get Started</Button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index)=>{
            return <Feature key={feature.id} index={index} feature={feature}/>
          })
        }
      </div>
    </div>
  );
};

export default Business;
