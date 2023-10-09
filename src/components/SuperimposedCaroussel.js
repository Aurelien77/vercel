import React, { useState, useRef } from "react";
import styles from "../styles/SuperimposedCarousel.module.css"; // Créez un fichier CSS pour les styles personnalisés
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SuperimposedCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.content}>
      <Carousel
        autoPlay={true} // Activer le défilement automatique
        interval={3000} // Durée de chaque diapositive en millisecondes (par exemple, 3 secondes)
        showStatus={false} // Masquer les indicateurs de diapositives
        showThumbs={false} // Masquer les vignettes de diapositives
        selectedItem={currentIndex} // Sélectionnez l'élément actuel
        infiniteLoop={true} // Activer la boucle infinie
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img
              src={image}
              alt={`Image ${index}`}
              className={`${styles.image} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          </div>
        ))}
      </Carousel>

    
  
    </div>
  );
};

export default SuperimposedCarousel;
