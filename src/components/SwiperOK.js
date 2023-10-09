import React, { useRef, useEffect, useState } from "react";
import Swiper from 'swiper';
import styles from '../styles/Home.module.css'


const SwiperOK = ({posts}) => {
  const [listOfPosts] = useState(posts);

  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize the Swiper instance
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next.custom-next-button",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  
    // Clean up the Swiper instance when the component unmounts
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div className="swiper-wrapper">
          {listOfPosts.map((value, index) => (
            <div key={index} className="swiper-slide">
              <div data-swiper-parallax="-500" className="h-100 align-items-center row">
                <div className="col-lg-6 offset-lg-6">
                  <div className={styles.card}>{value.lien}</div>
                  <div className="sous-titre">
                    {value.title}
                    <span>{value.postText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
      <button onClick={() => swiperRef.current.slidePrev()}>Précédent</button>
      <button onClick={() => swiperRef.current.slideNext()}>Suivant</button>
    </>
  );
};

export default SwiperOK;


