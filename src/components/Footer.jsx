import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            className="w-[266px] h-[72px] object-contain"
            src={logo}
            alt="logo"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310]`}>
            A new way to ake payments <br className="hidden sm:block" />
            easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex justify-between mt-10 md:mt-0">
          {footerLinks.map((footerLink, index) => {
            return (
              <div key={index} className="flex flex-col my-4 ss:my-0 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index)=>{
                    return <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length-1 && 'mb-4'}`}>{link.name}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full flex justify-between flex-col items-center md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-popins font-normal text-center text-[18px] leading-[27px] text-white">2021 HooBank. All Rights Reserved.</p>
        <div className="flex mt-6 md:mt-0">
           {socialMedia.map((social, index)=>{
            return <img className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 && 'mr-6'}`} key={index} src={social.icon} alt="social_id"/>
           })} 
        </div>
      </div>
    </section>
  );
};

export default Footer;
